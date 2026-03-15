import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { User, MapPin, Sword } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { characters } from "@/data/characters";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Characters",
    description: "Full list of characters in Naruto Shippuden with detailed history and abilities.",
  };
}

export default async function CharactersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("characters");
  const l = locale as "vi" | "en";

  const statusConfig = {
    alive: { label: t("status.alive"), class: "text-green-500 border-green-500/30 bg-green-500/10" },
    dead: { label: t("status.dead"), class: "text-red-500 border-red-500/30 bg-red-500/10" },
    unknown: { label: t("status.unknown"), class: "text-yellow-500 border-yellow-500/30 bg-yellow-500/10" },
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <Badge variant="secondary" className="text-blue-500 border-blue-500/30 bg-blue-500/10">
          {t("badge")}
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h1>
        <p className="max-w-2xl text-muted-foreground leading-relaxed">{t("description")}</p>
      </div>

      {/* Characters Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((char) => {
          const status = statusConfig[char.status];
          return (
            <Link key={char.id} href={`/nhan-vat/${char.slug}`} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-blue-500/40 group-hover:bg-accent/20">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-blue-500/10 flex items-center justify-center shrink-0">
                      {char.image ? (
                        <Image
                          src={char.image}
                          alt={char.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <User className="h-6 w-6 text-blue-500" />
                      )}
                    </div>
                    <Badge variant="outline" className={`text-xs ${status.class}`}>
                      {status.label}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-base leading-tight group-hover:text-blue-500 transition-colors">
                      {char.name}
                    </CardTitle>
                    {char.nameJP && (
                      <p className="text-xs text-muted-foreground mt-0.5">{char.nameJP}</p>
                    )}
                  </div>
                  <CardDescription className="leading-relaxed line-clamp-2 text-xs">
                    {char.description[l]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{char.village}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Sword className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{char.rank[l]}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {char.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag.vi} variant="secondary" className="text-xs">
                        {tag[l]}
                      </Badge>
                    ))}
                    {char.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs text-muted-foreground">
                        +{char.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
