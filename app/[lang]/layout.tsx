import { notFound } from "next/navigation";
import SiteDocument from "@/components/SiteDocument";
import { isLang } from "@/content/i18n";

export default async function Layout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "en") notFound();
  return <SiteDocument lang={lang}>{children}</SiteDocument>;
}
