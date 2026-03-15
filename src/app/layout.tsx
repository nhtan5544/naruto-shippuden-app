import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { getLocale } from "next-intl/server";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Naruto Shippuden Wiki",
    template: "%s | Naruto Shippuden Wiki",
  },
  description:
    "A comprehensive guide to the world of Naruto Shippuden — characters, ninja villages, legendary eye techniques and author history.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${montserrat.variable} ${geistMono.variable}`}
    >
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
