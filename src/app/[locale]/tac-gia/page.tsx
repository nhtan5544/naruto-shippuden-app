import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BookOpen, Award, Pen, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { author } from "@/data/author";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: author.name,
    description: `About the life and career of ${author.name} — creator of Naruto Shippuden.`,
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("author");

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <Badge variant="secondary" className="text-amber-500 border-amber-500/30 bg-amber-500/10">
          {t("badge")}
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{author.name}</h1>
        <p className="text-lg text-muted-foreground font-medium">{author.nameJP}</p>
        <p className="max-w-2xl text-muted-foreground leading-relaxed">{author.description}</p>
      </div>

      {/* Info Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-amber-500">
              <Calendar className="h-4 w-4" />
              <CardTitle className="text-sm font-medium">{t("birthdate")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{author.birthdate}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-amber-500">
              <BookOpen className="h-4 w-4" />
              <CardTitle className="text-sm font-medium">{t("birthplace")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{author.birthplace}</p>
          </CardContent>
        </Card>
      </div>

      {/* Biography */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Pen className="h-5 w-5 text-amber-500" />
          <h2 className="text-2xl font-bold">{t("biography")}</h2>
        </div>
        <Separator />
        <div className="space-y-4">
          {author.biography.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Works */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-amber-500" />
          <h2 className="text-2xl font-bold">{t("works")}</h2>
        </div>
        <Separator />
        <ul className="space-y-2">
          {author.works.map((work, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span className="text-muted-foreground">{work}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Awards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-amber-500" />
          <h2 className="text-2xl font-bold">{t("awards")}</h2>
        </div>
        <Separator />
        <div className="flex flex-wrap gap-2">
          {author.awards.map((award, i) => (
            <Badge key={i} variant="secondary" className="text-sm py-1.5 px-3">
              {award}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
