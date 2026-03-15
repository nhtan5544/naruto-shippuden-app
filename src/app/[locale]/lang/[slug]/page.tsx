import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, Map, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/lib/button-variants";
import { Link } from "@/i18n/navigation";
import { villages } from "@/data/villages";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return villages.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const village = villages.find((v) => v.slug === slug);
  if (!village) return {};
  return { title: village.name.vi, description: village.description.vi };
}

export default async function VillageDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("villageDetail");
  const l = locale as "vi" | "en";

  const village = villages.find((v) => v.slug === slug);
  if (!village) notFound();

  return (
    <div className="space-y-10">
      {/* Back */}
      <Link href="/lang" className={buttonVariants({ variant: "ghost", size: "sm" }) + " -ml-2"}>
        <ArrowLeft className="h-4 w-4 mr-1" /> {t("back")}
      </Link>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-green-500 border-green-500/30 bg-green-500/10">
            {village.country[l]}
          </Badge>
          <Badge variant="outline">{village.kage}</Badge>
          {village.tags.map((tag) => (
            <Badge key={tag.vi} variant="outline" className="text-xs">
              {tag[l]}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{village.name[l]}</h1>
        {village.nameJP && <p className="text-lg text-muted-foreground">{village.nameJP}</p>}
        <p className="max-w-2xl text-muted-foreground leading-relaxed">{village.description[l]}</p>
      </div>

      {/* Info Row */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-green-500">
              <Map className="h-4 w-4" />
              <CardTitle className="text-sm">{t("country")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{village.country[l]}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-green-500">
              <Shield className="h-4 w-4" />
              <CardTitle className="text-sm">{t("leader")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{village.kage}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-green-500">
              <Users className="h-4 w-4" />
              <CardTitle className="text-sm">{t("notableNinjaLabel")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{t("ninjaCount", { count: village.notableNinja.length })}</p>
          </CardContent>
        </Card>
      </div>

      {/* History */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{t("history")}</h2>
        <Separator />
        <p className="leading-relaxed text-muted-foreground whitespace-pre-line">{village.history[l]}</p>
      </div>

      {/* Notable Ninja */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{t("notableNinja")}</h2>
        <Separator />
        <div className="flex flex-wrap gap-2">
          {village.notableNinja.map((ninja) => (
            <Badge key={ninja} variant="secondary" className="text-sm py-1.5 px-3">
              {ninja}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
