import { notFound } from "next/navigation";
import Relay, { relayMetadata } from "@/views/Relay";
import { isLang, prefixed } from "@/content/i18n";

export const dynamicParams = false;
export const generateStaticParams = () => prefixed;

export async function generateMetadata({ params }: PageProps<"/[lang]/relay">) {
  const { lang } = await params;
  return isLang(lang) ? relayMetadata(lang) : {};
}

export default async function Page({ params }: PageProps<"/[lang]/relay">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Relay lang={lang} />;
}
