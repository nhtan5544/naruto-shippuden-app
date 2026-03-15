import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, MapPin, Sword, Eye, Users, Zap, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/lib/button-variants";
import { Link } from "@/i18n/navigation";
import { characters } from "@/data/characters";

const STATUS_CONFIG = {
  alive: { label: "Còn sống", class: "text-green-500 border-green-500/30 bg-green-500/10" },
  dead: { label: "Đã mất", class: "text-red-500 border-red-500/30 bg-red-500/10" },
  unknown: { label: "Không rõ", class: "text-yellow-500 border-yellow-500/30 bg-yellow-500/10" },
};

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return characters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const char = characters.find((c) => c.slug === slug);
  if (!char) return {};
  return { title: char.name, description: char.description.vi };
}

export default async function CharacterDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("characterDetail");
  const l = locale as "vi" | "en";

  const char = characters.find((c) => c.slug === slug);
  if (!char) notFound();

  const status = STATUS_CONFIG[char.status];

  return (
    <div className="space-y-10">
      {/* Back */}
      <Link href="/nhan-vat" className={buttonVariants({ variant: "ghost", size: "sm" }) + " -ml-2"}>
        <ArrowLeft className="h-4 w-4 mr-1" /> {t("back")}
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="shrink-0 h-32 w-32 rounded-2xl overflow-hidden bg-blue-500/10 border border-border flex items-center justify-center">
          {char.image ? (
            <Image
              src={char.image}
              alt={char.name}
              width={128}
              height={128}
              priority
              className="h-full w-full object-cover"
            />
          ) : (
            <User className="h-14 w-14 text-blue-500/60" />
          )}
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className={status.class}>
              {status.label}
            </Badge>
            {char.tags.map((tag) => (
              <Badge key={tag.vi} variant="secondary" className="text-xs">
                {tag[l]}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{char.name}</h1>
          {char.nameJP && <p className="text-lg text-muted-foreground">{char.nameJP}</p>}
          <p className="max-w-2xl text-muted-foreground leading-relaxed">{char.description[l]}</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-blue-500">
              <MapPin className="h-4 w-4" />
              <CardTitle className="text-xs font-medium">{t("village")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold leading-tight">{char.village}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-blue-500">
              <Sword className="h-4 w-4" />
              <CardTitle className="text-xs font-medium">{t("rank")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold leading-tight">{char.rank[l]}</p>
          </CardContent>
        </Card>
        {char.clan && (
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-blue-500">
                <Users className="h-4 w-4" />
                <CardTitle className="text-xs font-medium">{t("clan")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold leading-tight">{char.clan?.[l]}</p>
            </CardContent>
          </Card>
        )}
        {char.dojutsu && (
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-blue-500">
                <Eye className="h-4 w-4" />
                <CardTitle className="text-xs font-medium">Dojutsu</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold leading-tight">{char.dojutsu?.[l]}</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* History */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{t("history")}</h2>
        <Separator />
        <p className="leading-relaxed text-muted-foreground">{char.history[l]}</p>
      </div>

      {/* Abilities */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-500" />
          <h2 className="text-2xl font-bold">{t("abilities")}</h2>
        </div>
        <Separator />
        <ul className="space-y-2">
          {char.abilities.map((ability, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
              <span className="text-muted-foreground">{ability[l]}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Characters CTA */}
      <div className="rounded-xl border border-border bg-accent/20 p-6">
        <p className="text-sm text-muted-foreground mb-3">{t("exploreMore")}</p>
        <Link href="/nhan-vat" className={buttonVariants({ variant: "outline", size: "sm" })}>
          {t("viewAll")}
        </Link>
      </div>
    </div>
  );
}
