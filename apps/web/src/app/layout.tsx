import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getCurrentLocale } from "@/lib/locale";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luma Studio | Interior design for timeless spaces",
    template: "%s | Luma Studio",
  },
  description:
    "Luma Studio creates refined residential and boutique commercial interiors with a focus on light, materials, and everyday comfort.",
  openGraph: {
    title: "Luma Studio",
    description:
      "Premium interior architecture website built with Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
