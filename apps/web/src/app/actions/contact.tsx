"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { ContactConfirmationEmail } from "@/emails/contact-confirmation";
import { sendTransactionalEmail } from "@/lib/email/resend";
import { publishEcosystemEvent } from "@/lib/ecosystem";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().min(2),
  budgetRange: z.string().min(2),
  message: z.string().min(10),
});

function createFlowId(email: string) {
  return `flow-${email.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

async function sendLeadToQuotePilot(input: z.infer<typeof contactSchema> & { flowId: string }) {
  const quotePilotUrl =
    process.env.QUOTEPILOT_INGEST_URL ??
    `${process.env.NEXT_PUBLIC_QUOTEPILOT_URL ?? "https://quotepilot-omega.vercel.app"}/api/ecosystem/leads`;

  try {
    await fetch(quotePilotUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flowId: input.flowId,
        name: input.name,
        email: input.email,
        phone: input.phone ?? "",
        projectType: input.projectType,
        budgetRange: input.budgetRange,
        message: input.message,
        sourceApp: "luma-studio",
      }),
      cache: "no-store",
    });
  } catch (error) {
    console.error("QuotePilot ingest failed", error);
  }
}

export async function sendContactMessage(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone")?.toString() || undefined,
    projectType: formData.get("projectType"),
    budgetRange: formData.get("budgetRange"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return;
  }

  console.log("Luma Studio contact request", parsed.data);
  const flowId = createFlowId(parsed.data.email);

  const event = await publishEcosystemEvent({
    flowId,
    sourceApp: "luma-studio",
    targetApps: ["quotepilot", "api-meter"],
    eventType: "lead.created",
    entityType: "lead",
    customerName: parsed.data.name,
    customerEmail: parsed.data.email,
    title: "Nouveau lead depuis Luma Studio",
    description: `${parsed.data.name} a soumis une demande ${parsed.data.projectType} avec budget ${parsed.data.budgetRange}.`,
    payload: parsed.data,
    priority: "HIGH",
    actionLabel: "Creer un devis",
    actionUrl: "/dashboard/quotes/new",
  });

  await sendLeadToQuotePilot({ ...parsed.data, flowId });

  await sendTransactionalEmail({
    to: parsed.data.email,
    subject: "Your Luma Studio inquiry was received",
    react: <ContactConfirmationEmail name={parsed.data.name} />,
  });

  redirect(`/contact?sent=quotepilot&flowId=${encodeURIComponent(event?.flowId ?? flowId)}`);
}
