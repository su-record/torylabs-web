import { notFound } from "next/navigation";
import Voin, { voinMetadata } from "@/views/Voin";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]/voin">) {
  const { lang } = await params;
  return isLang(lang) ? voinMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/voin">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Voin lang={lang} />;
}
