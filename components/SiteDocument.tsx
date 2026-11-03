import "@/app/globals.css";
import type { Lang } from "@/content/i18n";

export default function SiteDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
