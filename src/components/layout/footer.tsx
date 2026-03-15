import { useTranslations } from "next-intl";
import { Scroll } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border/50 bg-background py-8 mt-16">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold mb-2">
          <Scroll className="h-4 w-4" />
          <span>Naruto Shippuden Wiki</span>
        </div>
        <p className="text-sm text-muted-foreground">{t("tagline")}</p>
        <p className="text-xs text-muted-foreground mt-2">{t("copyright")}</p>
      </div>
    </footer>
  );
}
