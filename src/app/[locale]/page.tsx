import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, BookOpen, Map, Users, Eye, User } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const sections = [
    {
      href: "/tac-gia" as const,
      icon: BookOpen,
      title: t("sections.author.title"),
      description: t("sections.author.description"),
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      badge: t("sections.author.badge"),
    },
    {
      href: "/lang" as const,
      icon: Map,
      title: t("sections.villages.title"),
      description: t("sections.villages.description"),
      color: "text-green-500",
      bg: "bg-green-500/10",
      badge: t("sections.villages.badge"),
    },
    {
      href: "/nhan-vat" as const,
      icon: Users,
      title: t("sections.characters.title"),
      description: t("sections.characters.description"),
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      badge: t("sections.characters.badge"),
    },
    {
      href: "/con-mat" as const,
      icon: Eye,
      title: t("sections.dojutsu.title"),
      description: t("sections.dojutsu.description"),
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      badge: t("sections.dojutsu.badge"),
    },
  ];

  const featuredCharacters = [
    {
      name: "Naruto Uzumaki",
      role: t("featured.naruto.role"),
      tag: t("featured.naruto.tag"),
      href: "/nhan-vat/naruto-uzumaki" as const,
    },
    {
      name: "Sasuke Uchiha",
      role: t("featured.sasuke.role"),
      tag: t("featured.sasuke.tag"),
      href: "/nhan-vat/sasuke-uchiha" as const,
    },
    {
      name: "Itachi Uchiha",
      role: t("featured.itachi.role"),
      tag: t("featured.itachi.tag"),
      href: "/nhan-vat/itachi-uchiha" as const,
    },
    {
      name: "Madara Uchiha",
      role: t("featured.madara.role"),
      tag: t("featured.madara.tag"),
      href: "/nhan-vat/madara-uchiha" as const,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6 py-8">
        <Badge variant="secondary" className="text-orange-500 border-orange-500/30 bg-orange-500/10">
          {t("badge")}
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Naruto Shippuden{" "}
          <span className="text-orange-500">Wiki</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {t("description")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/nhan-vat"
            className={cn(buttonVariants({ size: "lg" }), "bg-orange-500 hover:bg-orange-600 text-white")}
          >
            {t("exploreBtn")} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/tac-gia" className={buttonVariants({ size: "lg", variant: "outline" })}>
            {t("authorBtn")}
          </Link>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">{t("exploreSection")}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-border group-hover:bg-accent/30">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className={`rounded-lg p-2.5 ${s.bg}`}>
                      <s.icon className={`h-5 w-5 ${s.color}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {s.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-orange-500 transition-colors">
                    {s.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{s.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Characters */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">{t("featuredSection")}</h2>
          <Link href="/nhan-vat" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            {t("viewAll")} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCharacters.map((c) => (
            <Link key={c.href} href={c.href}>
              <Card className="hover:border-orange-500/50 transition-all duration-200 hover:shadow-md hover:bg-accent/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10">
                      <User className="h-5 w-5 text-orange-500" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-sm leading-tight truncate">{c.name}</CardTitle>
                      <CardDescription className="text-xs truncate">{c.role}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs mt-1">
                    {c.tag}
                  </Badge>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-8 text-center space-y-3">
        <p className="text-xl font-medium italic text-foreground/80">
          &ldquo;{t("quote")}&rdquo;
        </p>
        <p className="text-sm text-muted-foreground">— {t("quoteBy")}</p>
      </section>
    </div>
  );
}
