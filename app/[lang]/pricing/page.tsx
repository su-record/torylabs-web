import { notFound } from "next/navigation";
import Pricing, { pricingMetadata } from "@/views/Pricing";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]/pricing">) {
  const { lang } = await params;
  return isLang(lang) ? pricingMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/pricing">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Pricing lang={lang} />;
}
