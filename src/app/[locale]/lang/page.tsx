import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Map, Users, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { villages } from "@/data/villages";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Villages",
    description: "History of ninja villages in the world of Naruto Shippuden.",
  };
}

export default async function VillagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("villages");
  const l = locale as "vi" | "en";

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <Badge variant="secondary" className="text-green-500 border-green-500/30 bg-green-500/10">
          {t("badge")}
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h1>
        <p className="max-w-2xl text-muted-foreground leading-relaxed">{t("description")}</p>
      </div>

      {/* Villages Grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {villages.map((village) => (
          <Link key={village.id} href={`/lang/${village.slug}`} className="group">
            <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-green-500/40 group-hover:bg-accent/20">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-green-500/10 p-2">
                      <Map className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{village.country[l]}</p>
                      <p className="text-sm font-medium text-muted-foreground">{village.symbol[l]}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs shrink-0">
                    {village.kage}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-green-500 transition-colors">
                  {village.name[l]}
                </CardTitle>
                {village.nameJP && (
                  <p className="text-sm text-muted-foreground">{village.nameJP}</p>
                )}
                <CardDescription className="leading-relaxed line-clamp-3">
                  {village.description[l]}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    <span>{t("notableNinja")}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {village.notableNinja.slice(0, 4).map((ninja) => (
                      <Badge key={ninja} variant="secondary" className="text-xs">
                        {ninja}
                      </Badge>
                    ))}
                    {village.notableNinja.length > 4 && (
                      <Badge variant="secondary" className="text-xs text-muted-foreground">
                        {t("others", { count: village.notableNinja.length - 4 })}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {village.tags.map((tag) => (
                    <Badge key={tag.vi} variant="outline" className="text-xs text-green-600 border-green-500/30">
                      <Shield className="h-2.5 w-2.5 mr-1" />
                      {tag[l]}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
