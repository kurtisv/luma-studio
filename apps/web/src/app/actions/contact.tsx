"use server";

import { z } from "zod";

import { ContactConfirmationEmail } from "@/emails/contact-confirmation";
import { sendTransactionalEmail } from "@/lib/email/resend";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().min(2),
  budgetRange: z.string().min(2),
  message: z.string().min(10),
});

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

  await sendTransactionalEmail({
    to: parsed.data.email,
    subject: "Your Luma Studio inquiry was received",
    react: <ContactConfirmationEmail name={parsed.data.name} />,
  });
}
