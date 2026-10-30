import { notFound } from "next/navigation";
import VicaRelay, { relayMetadata } from "@/views/VicaRelay";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]/vica/relay">) {
  const { lang } = await params;
  return isLang(lang) ? relayMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/vica/relay">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <VicaRelay lang={lang} />;
}
