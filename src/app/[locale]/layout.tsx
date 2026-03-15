import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const [{ locale }, messages] = await Promise.all([params, getMessages()]);
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <Providers>
        <Navbar />
        <main className="container mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </Providers>
    </NextIntlClientProvider>
  );
}
