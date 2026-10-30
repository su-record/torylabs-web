import type { Metadata } from "next";
import Link from "next/link";
import { alternates, localized, type Lang } from "@/content/i18n";
import { Header, Footer } from "@/components/Chrome";
import { SUBSCRIBE } from "@/views/Vica";

const text = {
  en: {
    title: "Pricing", description: "Prices of Tory Labs products.",
    rows: [
      { name: "vica relay subscription", price: "US$2 / month", note: "Connects your phone and vica. Billed monthly; cancel any time." },
      { name: "vica app", price: "Free", note: "" },
      { name: "voin", price: "Free", note: "Open source (MIT)." },
      { name: "vibe", price: "Free", note: "Open source." },
    ],
    paddle: "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Taxes may be added at checkout depending on your country.",
    subscribe: "Subscribe to the relay", refund: "Refund policy", vica: "About vica",
  },
  ja: {
    title: "料金", description: "Tory Labs製品の料金。",
    rows: [
      { name: "vica 中継サブスクリプション", price: "月額 US$2", note: "スマートフォンとvicaをつなぎます。毎月請求、いつでも解約できます。" },
      { name: "vicaアプリ", price: "無料", note: "" },
      { name: "voin", price: "無料", note: "オープンソース（MIT）。" },
      { name: "vibe", price: "無料", note: "オープンソース。" },
    ],
    paddle: "ご注文の手続きは、当社のオンライン販売代理店Paddle.comが行います。Paddle.comがすべての注文の販売者（Merchant of Record）です。国によっては決済時に税金が加算されます。",
    subscribe: "中継を購読する", refund: "返金ポリシー", vica: "vicaについて",
  },
  ko: {
    title: "가격", description: "Tory Labs 제품 가격.",
    rows: [
      { name: "vica 중계 구독", price: "월 US$2", note: "휴대폰과 vica를 잇습니다. 매달 청구되고 언제든 해지할 수 있습니다." },
      { name: "vica 앱", price: "무료", note: "" },
      { name: "voin", price: "무료", note: "오픈소스(MIT)." },
      { name: "vibe", price: "무료", note: "오픈소스." },
    ],
    paddle: "주문 절차는 저희 온라인 판매 대행사 Paddle.com이 진행합니다. 모든 주문의 판매자(Merchant of Record)는 Paddle.com입니다. 나라에 따라 결제 때 세금이 더해질 수 있습니다.",
    subscribe: "중계 구독하기", refund: "환불 정책", vica: "vica 소개",
  },
} satisfies Record<Lang, unknown>;

export function pricingMetadata(lang: Lang): Metadata {
  return { title: `${text[lang].title} | Tory Labs`, description: text[lang].description, alternates: alternates(lang, "/pricing") };
}

export default function Pricing({ lang }: { lang: Lang }) {
  const t = text[lang];
  const link = "underline underline-offset-4";
  return (
    <>
      <Header lang={lang} path="/pricing" />
      <main lang={lang} className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">{t.title}</h1>
        <div className="mt-10 divide-y divide-[var(--line)] rounded-xl border border-[var(--line)] bg-[var(--card)]">
          {t.rows.map((r) => (
            <div key={r.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 p-6">
              <div>
                <h2 className="font-semibold">{r.name}</h2>
                {r.note && <p className="mt-1 text-sm text-[var(--muted)]">{r.note}</p>}
              </div>
              <p className="text-xl font-bold">{r.price}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">{t.paddle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
          <a href={SUBSCRIBE} className="rounded-lg bg-[var(--fg)] px-5 py-3 font-medium text-[var(--bg)]">{t.subscribe}</a>
          <Link href={localized(lang, "/vica")} className={link}>{t.vica}</Link>
          <Link href={localized(lang, "/refund")} className={link}>{t.refund}</Link>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
