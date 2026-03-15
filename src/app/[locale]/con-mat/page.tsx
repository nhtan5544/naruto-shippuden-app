import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Eye, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dojutsuList, legendaryDojutsu, rareDojutsu } from "@/data/dojutsu";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dojutsu",
    description: "Encyclopedia of Dojutsu — legendary eye techniques — in the world of Naruto Shippuden.",
  };
}

export default async function DoujutsuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("dojutsu");

  const tierConfig = {
    common: { label: t("tier.common"), class: "text-slate-500 border-slate-500/30 bg-slate-500/10" },
    rare: { label: t("tier.rare"), class: "text-blue-500 border-blue-500/30 bg-blue-500/10" },
    legendary: { label: t("tier.legendary"), class: "text-purple-500 border-purple-500/30 bg-purple-500/10" },
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <Badge variant="secondary" className="text-purple-500 border-purple-500/30 bg-purple-500/10">
          {t("badge")}
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h1>
        <p className="max-w-2xl text-muted-foreground leading-relaxed">{t("description")}</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">{t("tabs.all")} ({dojutsuList.length})</TabsTrigger>
          <TabsTrigger value="legendary">{t("tabs.legendary")} ({legendaryDojutsu.length})</TabsTrigger>
          <TabsTrigger value="rare">{t("tabs.rare")} ({rareDojutsu.length})</TabsTrigger>
        </TabsList>

        {(["all", "legendary", "rare"] as const).map((tab) => {
          const list = tab === "all" ? dojutsuList : tab === "legendary" ? legendaryDojutsu : rareDojutsu;
          return (
            <TabsContent key={tab} value={tab} className="space-y-5">
              {list.map((dojutsu) => {
                const tier = tierConfig[dojutsu.tier];
                return (
                  <Card key={dojutsu.id} className="overflow-hidden">
                    <div className="h-1 w-full" style={{ backgroundColor: dojutsu.color }} />
                    <CardHeader className="space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div
                            className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full"
                            style={{ backgroundColor: `${dojutsu.color}20`, outline: `2px solid ${dojutsu.color}` }}
                          >
                            {dojutsu.image ? (
                              <Image
                                src={dojutsu.image}
                                alt={dojutsu.name}
                                fill
                                sizes="56px"
                                className="object-cover"
                              />
                            ) : (
                              <Eye className="h-6 w-6" style={{ color: dojutsu.color }} />
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{dojutsu.name}</CardTitle>
                            {dojutsu.nameJP && (
                              <p className="text-sm text-muted-foreground">{dojutsu.nameJP}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className={tier.class}>
                            {tier.label}
                          </Badge>
                          <Badge variant="secondary">{dojutsu.clan}</Badge>
                        </div>
                      </div>
                      <CardDescription className="leading-relaxed text-sm">
                        {dojutsu.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* History */}
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-foreground">{t("history")}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{dojutsu.history}</p>
                      </div>

                      <Separator />

                      {/* Abilities */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4" style={{ color: dojutsu.color }} />
                          <h3 className="text-sm font-semibold">{t("abilities")}</h3>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {dojutsu.abilities.map((ability) => (
                            <div
                              key={ability.name}
                              className="rounded-lg border border-border bg-accent/30 p-3 space-y-1"
                            >
                              <p className="text-sm font-medium">{ability.name}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {ability.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Users */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <h3 className="text-sm font-semibold">{t("users")}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {dojutsu.users.map((user) => (
                            <Badge key={user} variant="secondary" className="text-xs">
                              {user}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
