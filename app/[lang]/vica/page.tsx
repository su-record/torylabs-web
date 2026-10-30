import { notFound } from "next/navigation";
import Vica, { vicaMetadata } from "@/views/Vica";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]/vica">) {
  const { lang } = await params;
  return isLang(lang) ? vicaMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/vica">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Vica lang={lang} />;
}
