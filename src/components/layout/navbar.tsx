"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState, useMemo, useCallback } from "react";
import { Menu, Scroll, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const otherLocale = locale === "vi" ? "en" : "vi";

  const navLinks = useMemo(
    () => [
      { href: "/" as const, label: t("home") },
      { href: "/tac-gia" as const, label: t("author") },
      { href: "/lang" as const, label: t("villages") },
      { href: "/nhan-vat" as const, label: t("characters") },
      { href: "/con-mat" as const, label: t("dojutsu") },
    ],
    [t]
  );

  const handleLocaleSwitch = useCallback(() => {
    router.push(pathname, { locale: otherLocale });
  }, [router, pathname, otherLocale]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-orange-500">
          <Scroll className="h-5 w-5" />
          <span className="text-lg">Naruto Shippuden Wiki</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === link.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <button
            onClick={handleLocaleSwitch}
            className="ml-2 flex items-center gap-1.5 rounded-md border border-border/60 px-2.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            title={otherLocale === "en" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
          >
            <Globe className="h-3.5 w-3.5" />
            {otherLocale.toUpperCase()}
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors"
            aria-label={t("openMenu")}
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-4">
            <div className="flex items-center gap-2 font-bold text-orange-500 mb-6 mt-2">
              <Scroll className="h-5 w-5" />
              <span>Naruto Wiki</span>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                    pathname === link.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <button
                onClick={() => {
                  setOpen(false);
                  handleLocaleSwitch();
                }}
                className="mt-2 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Globe className="h-4 w-4" />
                {otherLocale === "en" ? "English" : "Tiếng Việt"}
              </button>
              <ThemeToggle className="mt-1 w-full justify-start px-3 py-2 text-sm font-medium" />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
