import Link from "next/link";
import { company } from "@/content/company";
import { langs, langNames, localized, type Lang } from "@/content/i18n";

const text = {
  en: {
    nav: ["About", "Products", "Founder", "Contact"],
    company: "Company", ceo: "CEO", biz: "Business registration no.", address: "Address",
    privacy: "Privacy", terms: "Terms", refund: "Refunds", pricing: "Pricing", updated: "Last updated",
  },
  ja: {
    nav: ["概要", "製品", "創業者", "お問い合わせ"],
    company: "会社名", ceo: "代表者", biz: "事業者登録番号", address: "所在地",
    privacy: "プライバシー", terms: "利用規約", refund: "返金", pricing: "料金", updated: "最終更新",
  },
  ko: {
    nav: ["소개", "제품", "창업자", "문의"],
    company: "회사", ceo: "대표", biz: "사업자등록번호", address: "주소",
    privacy: "개인정보처리방침", terms: "이용약관", refund: "환불", pricing: "가격", updated: "최종 수정",
  },
} satisfies Record<Lang, unknown>;

/** Links to this page in the other languages; the choice is remembered (languageScript). */
function Languages({ lang, path }: { lang: Lang; path: string }) {
  return (
    <nav className="flex gap-3 text-sm">
      {langs.map((l) => l === lang
        ? <span key={l} className="font-medium">{langNames[l]}</span>
        : <a key={l} href={localized(l, path)} data-lang={l} hrefLang={l} className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]">{langNames[l]}</a>)}
    </nav>
  );
}

export function Header({ lang, path, home = false }: { lang: Lang; path: string; home?: boolean }) {
  const ids = ["about", "products", "team", "contact"];
  return (
    <header className="sticky top-0 z-20 border-b border-white/[.06] bg-[#07070a]/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5">
        <Link href={localized(lang, "/")} className="group flex items-center gap-2.5 font-semibold tracking-tight">
          <span aria-hidden="true" className="relative flex h-6 w-6 items-center justify-center rounded-[7px] border border-white/10 bg-gradient-to-b from-white/10 to-white/[.02] shadow-[0_0_18px_-4px_rgba(124,108,240,.7)]">
            <i className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition group-hover:scale-125" />
          </span>
          Tory Labs
        </Link>
        <div className="flex items-center gap-6">
          {home && (
            <nav className="hidden gap-6 text-sm sm:flex">
              {ids.map((id, i) => <a key={id} href={`#${id}`} className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]">{text[lang].nav[i]}</a>)}
            </nav>
          )}
          <Languages lang={lang} path={path} />
        </div>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <footer className="relative border-t border-[var(--line)] bg-[#050507]">
      <div aria-hidden="true" className="absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-[var(--glow)] to-transparent opacity-60" />
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-[var(--muted)]">
        <p className="font-semibold text-[var(--fg)]">{company.name}</p>
        <dl className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
          <div>{t.company}: {company.name}</div>
          <div>{t.ceo}: {company.ceo}</div>
          <div>{t.biz}: {company.bizNumber}</div>
          <div>{t.address}: {company.address}</div>
        </dl>
        <p className="mt-6 flex flex-wrap gap-x-2">
          <span>© 2026 {company.name}</span>·
          {/* Pricing is the relay subscription, out of sight for now (owner request 2026-10-30). */}
          <span className="hidden"><Link href={localized(lang, "/pricing")} className="transition-colors hover:text-[var(--fg)]">{t.pricing}</Link>·</span>
          <Link href={localized(lang, "/privacy")} className="transition-colors hover:text-[var(--fg)]">{t.privacy}</Link>·
          <Link href={localized(lang, "/terms")} className="transition-colors hover:text-[var(--fg)]">{t.terms}</Link>·
          {/* The refund policy is about the subscription, out of sight for now (owner request 2026-10-30). */}
          <Link href={localized(lang, "/refund")} className="hidden">{t.refund}</Link>
          <a href={`mailto:${company.email}`} className="transition-colors hover:text-[var(--fg)]">{company.email}</a>
        </p>
      </div>
    </footer>
  );
}

export function LegalPage({ lang, path, title, updated, children }: { lang: Lang; path: string; title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Header lang={lang} path={path} />
      <main lang={lang} className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">{text[lang].updated}: {updated}</p>
        <div className="legal mt-10">{children}</div>
        <p className="mt-12"><Link href={localized(lang, "/")} className="text-sm underline">← Tory Labs</Link></p>
      </main>
      <Footer lang={lang} />
    </>
  );
}
