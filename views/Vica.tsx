import type { Metadata } from "next";
import Link from "next/link";
import { alternates, localized, type Lang } from "@/content/i18n";
import { Header, Footer } from "@/components/Chrome";

// Facts sourced from the vica README (github.com/su-record/vica, private) as of 2026-10-30.
export const SUBSCRIBE = "https://vica.torylabs.dev/subscribe";
// The newest release (scripts/release.sh in the vica repository publishes it there).
export const DOWNLOAD = "https://github.com/su-record/vica-releases/releases/latest";

const text = {
  en: {
    title: "vica | Hand your coding requests to the agents on your Mac | Tory Labs",
    description: "vica is a desktop app that splits a coding request into steps and hands each step to Claude Code, Codex, Antigravity, Grok or Muse Code on your computer.",
    eyebrow: "macOS · Free app · Optional US$2/month relay",
    lead: "Write what you want built. vica hands the work to the coding agents on your computer and sees it through.",
    sub: "vica runs the agent CLIs you have installed and signed in to: Claude Code, Codex, Antigravity, Grok and Muse Code. It splits each request into steps and gives each step to the agent suited to its role.",
    mac: "Download for Mac (Apple Silicon)", windows: "Windows · Coming soon", subscribe: "Subscribe to the relay",
    featuresTitle: "Features",
    features: [
      { t: "Requests, finished", d: "vica plans a multi-step request, runs the steps, and waits for you only where a person should decide." },
      { t: "Roles", d: "Planning, image drafts, implementation, debugging and tests, review, screen checks, research, UI and bulk reading. Review goes to a different company than the one that built." },
      { t: "Runs in the background", d: "Agents run without a window. Their output is kept, so you can close vica and pick up where it left off." },
      { t: "Limits and confirmations", d: "Each request has time and token limits, and vica asks before anything hard to undo." },
      { t: "Terminal", d: "Tabs and splits, sessions that keep running after the window closes, and projects on SSH servers." },
      { t: "Your own agents", d: "vica uses the agents with your own accounts and plans. It does not sell model access." },
    ],
    pricingTitle: "Pricing",
    appName: "vica app", appPrice: "Free",
    relayName: "Relay subscription", relayPrice: "US$2 / month",
    relay: [
      "Connects your phone and vica through our relay server (vica.torylabs.dev).",
      "No account: paying gives you a subscription key, which you enter in vica on any computer.",
      "Billed monthly by Paddle. Taxes may be added at checkout depending on your country.",
      "Cancel any time; the key works until the end of the paid period.",
    ],
    refund: "Refund policy",
    privacyTitle: "Privacy",
    privacy: "Your code and prompts go from your computer to the agent providers you use, under their terms, not through our servers. If you subscribe to the relay, messages between your phone and vica pass through our relay server.",
    policy: "Privacy Policy",
    reqTitle: "Requirements",
    req: ["A Mac with Apple Silicon.", "The agent CLIs you want to use, signed in with your own accounts. vica can install and sign in to them from its settings."],
  },
  ja: {
    title: "vica | コーディングの依頼をMacのエージェントに任せる | Tory Labs",
    description: "vicaは、コーディングの依頼を段階に分け、パソコンにあるClaude Code、Codex、Antigravity、Grok、Muse Codeに任せるデスクトップアプリです。",
    eyebrow: "macOS · アプリ無料 · 中継は月額US$2（任意）",
    lead: "作りたいものを書くだけ。vicaがパソコンのコーディングエージェントに任せ、最後までやり遂げます。",
    sub: "vicaは、インストールしてログイン済みのエージェントCLI（Claude Code、Codex、Antigravity、Grok、Muse Code）を動かします。依頼を段階に分け、各段階を役割に合ったエージェントに任せます。",
    mac: "Macをダウンロード（Apple Silicon）", windows: "Windows · 近日公開", subscribe: "中継を購読する",
    featuresTitle: "機能",
    features: [
      { t: "依頼を最後まで", d: "複数段階の依頼は計画を立てて順に実行し、人が決めるべき所でだけ確認を待ちます。" },
      { t: "役割", d: "設計、画像案、実装、デバッグとテスト、レビュー、画面確認、調査、UI・大量の読み込み。レビューは実装とは別の会社が担当します。" },
      { t: "バックグラウンド実行", d: "エージェントはウィンドウなしで動きます。出力は保存されるので、vicaを閉じても続きから再開できます。" },
      { t: "上限と確認", d: "依頼ごとに時間とトークンの上限があり、元に戻しにくい操作の前には確認します。" },
      { t: "ターミナル", d: "タブと分割、ウィンドウを閉じても続くセッション、SSHサーバー上のプロジェクト。" },
      { t: "あなたのエージェント", d: "vicaはあなた自身のアカウントとプランでエージェントを使います。モデルの利用権は販売しません。" },
    ],
    pricingTitle: "料金",
    appName: "vicaアプリ", appPrice: "無料",
    relayName: "中継サブスクリプション", relayPrice: "月額 US$2",
    relay: [
      "当社の中継サーバー（vica.torylabs.dev）を通じて、スマートフォンとvicaをつなぎます。",
      "アカウント不要。支払うとサブスクリプションキーが発行され、どのパソコンのvicaにも入力して使えます。",
      "Paddleが毎月請求します。国によっては決済時に税金が加算されます。",
      "いつでも解約でき、支払済みの期間が終わるまでキーは有効です。",
    ],
    refund: "返金ポリシー",
    privacyTitle: "プライバシー",
    privacy: "コードとプロンプトは、パソコンから利用中のエージェント提供元へ、その提供元の規約のもとで送られ、当社のサーバーは通りません。中継を購読すると、スマートフォンとvicaの間のメッセージは当社の中継サーバーを通ります。",
    policy: "プライバシーポリシー",
    reqTitle: "動作環境",
    req: ["Apple Silicon搭載のMac。", "使いたいエージェントCLIと、ご自身のアカウントでのログイン。vicaの設定からインストールとログインができます。"],
  },
  ko: {
    title: "vica | 코딩 요청을 Mac의 에이전트에게 맡기기 | Tory Labs",
    description: "vica는 코딩 요청을 단계로 나눠 내 컴퓨터의 Claude Code, Codex, Antigravity, Grok, Muse Code에게 맡기는 데스크톱 앱입니다.",
    eyebrow: "macOS · 앱 무료 · 중계 월 US$2 (선택)",
    lead: "만들 것을 적으면, vica가 내 컴퓨터의 코딩 에이전트들에게 맡겨 끝까지 해냅니다.",
    sub: "vica는 설치하고 로그인한 에이전트 CLI(Claude Code, Codex, Antigravity, Grok, Muse Code)를 실행합니다. 요청을 단계로 나누고, 단계마다 역할에 맞는 에이전트에게 맡깁니다.",
    mac: "Mac 다운로드 (Apple Silicon)", windows: "Windows · 곧 공개", subscribe: "중계 구독하기",
    featuresTitle: "기능",
    features: [
      { t: "요청을 끝까지", d: "여러 단계 요청은 계획을 세워 차례로 실행하고, 사람이 정해야 하는 곳에서만 확인을 기다립니다." },
      { t: "역할", d: "설계, 이미지 시안, 구현, 디버깅과 테스트, 리뷰, 화면 확인, 조사, UI·대량 읽기. 리뷰는 구현한 회사와 다른 회사가 맡습니다." },
      { t: "뒤에서 실행", d: "에이전트는 창 없이 실행됩니다. 출력이 저장되어 vica를 닫았다 열어도 이어서 받습니다." },
      { t: "상한과 확인", d: "요청마다 시간과 토큰 상한이 있고, 되돌리기 어려운 일은 먼저 묻습니다." },
      { t: "터미널", d: "탭과 분할, 창을 닫아도 계속 도는 세션, SSH 서버의 프로젝트." },
      { t: "내 에이전트", d: "vica는 사용자 본인의 계정과 요금제로 에이전트를 씁니다. 모델 사용권을 팔지 않습니다." },
    ],
    pricingTitle: "가격",
    appName: "vica 앱", appPrice: "무료",
    relayName: "중계 구독", relayPrice: "월 US$2",
    relay: [
      "저희 중계 서버(vica.torylabs.dev)를 통해 휴대폰과 vica를 잇습니다.",
      "계정 없음: 결제하면 구독 키가 나오고, 어느 컴퓨터의 vica에든 넣어 씁니다.",
      "Paddle이 매달 청구합니다. 나라에 따라 결제 때 세금이 더해질 수 있습니다.",
      "언제든 해지할 수 있고, 결제한 기간이 끝날 때까지 키를 쓸 수 있습니다.",
    ],
    refund: "환불 정책",
    privacyTitle: "개인정보",
    privacy: "코드와 프롬프트는 내 컴퓨터에서 사용 중인 에이전트 제공사로, 그 회사의 약관에 따라 바로 갑니다. 저희 서버를 거치지 않습니다. 중계를 구독하면 휴대폰과 vica 사이의 메시지는 저희 중계 서버를 거칩니다.",
    policy: "개인정보처리방침",
    reqTitle: "필요 환경",
    req: ["Apple Silicon Mac.", "쓰려는 에이전트 CLI와 본인 계정 로그인. vica 설정에서 설치와 로그인을 할 수 있습니다."],
  },
} satisfies Record<Lang, unknown>;

export function vicaMetadata(lang: Lang): Metadata {
  const { title, description } = text[lang];
  return { title, description, alternates: alternates(lang, "/vica"), openGraph: { title: "vica by Tory Labs", url: localized(lang, "/vica"), description } };
}

const H2 = ({ children }: { children: string }) => <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>;

export default function Vica({ lang }: { lang: Lang }) {
  const t = text[lang];
  const link = "underline underline-offset-4";
  return (
    <>
      <Header lang={lang} path="/vica" />
      <main lang={lang} className="mx-auto max-w-5xl px-6">
        <section className="py-24 sm:py-28">
          <p className="text-sm font-medium text-[var(--accent)]">{t.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">vica</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed">{t.lead}</p>
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted)]">{t.sub}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={DOWNLOAD} className="rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">{t.mac}</a>
            <span aria-disabled="true" className="rounded-lg border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--muted)]">{t.windows}</span>
            {/* The relay subscription stays out of sight for now (owner request 2026-10-30). */}
            <a href={SUBSCRIBE} className="hidden rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">{t.subscribe}</a>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <H2>{t.featuresTitle}</H2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f) => (
              <div key={f.t} className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
                <h3 className="font-semibold">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="hidden scroll-mt-20 border-t border-[var(--line)] py-20">
          <H2>{t.pricingTitle}</H2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
              <h3 className="font-semibold">{t.appName}</h3>
              <p className="mt-2 text-3xl font-bold">{t.appPrice}</p>
            </div>
            <div className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
              <h3 className="font-semibold">{t.relayName}</h3>
              <p className="mt-2 text-3xl font-bold">{t.relayPrice}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--muted)]">
                {t.relay.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <p className="mt-4 text-sm"><Link href={localized(lang, "/refund")} className={link}>{t.refund}</Link></p>
              <a href={SUBSCRIBE} className="mt-6 inline-block rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">{t.subscribe}</a>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <H2>{t.privacyTitle}</H2>
          <p className="max-w-3xl leading-relaxed text-[var(--muted)]">{t.privacy} <Link href={localized(lang, "/privacy")} className={link}>{t.policy}</Link></p>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <H2>{t.reqTitle}</H2>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-[var(--muted)]">
            {t.req.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
