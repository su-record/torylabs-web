import type { Metadata } from "next";
import Link from "next/link";
import { alternates, localized, type Lang } from "@/content/i18n";
import { Header, Footer } from "@/components/Chrome";
import VicaScene from "@/views/VicaScene";

// Facts sourced from the vica README (github.com/su-record/vica, private) as of 2026-10-30.
export const SUBSCRIBE = "https://vica.torylabs.dev/subscribe";
// The newest release (scripts/release.sh in the vica repository publishes it there).
export const DOWNLOAD = "https://github.com/su-record/vica-releases/releases/latest";

const text = {
  en: {
    title: "vica | Hand your coding requests to the agents on your Mac | Tory Labs",
    description: "vica is a desktop app that splits a coding request into steps and hands each step to Claude Code, Codex, Antigravity, Grok or Muse Code on your computer.",
    eyebrow: "macOS · Free app", eyebrowRelay: " · Optional US$2/month relay",
    lead: "Say what you want built. vica sees it through.",
    sub: "Tell vica the work in one chat, from your Mac or your phone. It hands each step to the coding agents you already use, and reports back when it is done.",
    mac: "Download for Mac (Apple Silicon)", windows: "Windows · Coming soon", subscribe: "Subscribe to the relay",
    howTitle: "How it works",
    how: [
      { t: "Write the request", d: "In vica on your Mac, or from your phone. A greeting gets a reply; work gets a plan." },
      { t: "vica hands it out", d: "Each step goes to the agent suited to it, and runs in the background." },
      { t: "Follow it anywhere", d: "Watch the work, answer questions and stop it from vica or your phone." },
    ],
    featuresTitle: "Features",
    features: [
      { t: "Requests, finished", d: "vica plans a multi-step request, runs the steps, and waits for you only where a person should decide." },
      { t: "Roles", d: "Planning, image drafts, implementation, debugging and tests, review, screen checks, research, UI and bulk reading. Review goes to a different company than the one that built." },
      { t: "Runs in the background", d: "Agents run without a window. Their output is kept, so you can close vica and pick up where it left off." },
      { t: "Limits and confirmations", d: "Each request has time and token limits, and vica asks before anything hard to undo." },
      { t: "Terminal", d: "Tabs and splits, sessions that keep running after the window closes, and projects on SSH servers." },
      { t: "Your own agents", d: "vica uses the agents with your own accounts and plans. It does not sell model access." },
    ],
    noLogin: "No sign-up. Just use it.",
    agentsTitle: "The agents you already use",
    agentsLead: "vica runs the CLIs you have installed, on your own accounts and plans. It does not sell model access.",
    phoneTitle: "On your phone, it is just a chat",
    phoneLead: "No terminals to manage. Tell Vica what you need, by voice or text. It opens a terminal on your computer, gives the agent the work, and answers in the chat when it is done.",
    phoneSteps: ["Ask from anywhere. Your computer does the work.", "Terminals stay open on your computer, ready to pick up.", "Everything between phone and computer is end-to-end encrypted."],
    guide: "How to set up your relay server",
    faqTitle: "Questions",
    faq: [["Is vica free?", "Yes. The app is free, and you use your own agent accounts."], ["How does my phone connect?", "Through a small relay server on your own Cloudflare account. vica makes the files and your agent can deploy them."], ["Does the server cost anything?", "It fits Cloudflare's free plan for one person. If you ever pass the daily limit, it stops until the next day; you are not charged."], ["Can the server read my work?", "No. Messages are encrypted with a key only your phone and computer hold."], ["Does my code leave my computer?", "Only to the agent providers you use, under their terms. It does not go through our servers."]],
    ctaTitle: "Hand it your next request",
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
    eyebrow: "macOS · アプリ無料", eyebrowRelay: " · 中継は月額US$2（任意）",
    lead: "頼むだけで、vicaが最後までやり遂げます。",
    sub: "Macでもスマートフォンでも、ひとつの会話でvicaに頼むだけ。使い慣れたコーディングエージェントに段階ごとに任せ、終わったら報告します。",
    mac: "Macをダウンロード（Apple Silicon）", windows: "Windows · 近日公開", subscribe: "中継を購読する",
    howTitle: "使い方",
    how: [
      { t: "依頼を書く", d: "Macのvicaでも、スマートフォンからでも。あいさつには返事を、仕事には計画を返します。" },
      { t: "vicaが割り振る", d: "各段階を向いたエージェントに任せ、バックグラウンドで動かします。" },
      { t: "どこからでも見守る", d: "vicaやスマートフォンで作業を見て、質問に答え、止めることもできます。" },
    ],
    featuresTitle: "機能",
    features: [
      { t: "依頼を最後まで", d: "複数段階の依頼は計画を立てて順に実行し、人が決めるべき所でだけ確認を待ちます。" },
      { t: "役割", d: "設計、画像案、実装、デバッグとテスト、レビュー、画面確認、調査、UI・大量の読み込み。レビューは実装とは別の会社が担当します。" },
      { t: "バックグラウンド実行", d: "エージェントはウィンドウなしで動きます。出力は保存されるので、vicaを閉じても続きから再開できます。" },
      { t: "上限と確認", d: "依頼ごとに時間とトークンの上限があり、元に戻しにくい操作の前には確認します。" },
      { t: "ターミナル", d: "タブと分割、ウィンドウを閉じても続くセッション、SSHサーバー上のプロジェクト。" },
      { t: "あなたのエージェント", d: "vicaはあなた自身のアカウントとプランでエージェントを使います。モデルの利用権は販売しません。" },
    ],
    noLogin: "ログイン不要。そのまま使えます。",
    agentsTitle: "いま使っているエージェントのまま",
    agentsLead: "インストール済みのCLIを、ご自身のアカウントとプランで動かします。モデルの利用権は販売しません。",
    phoneTitle: "スマートフォンでは、会話だけ",
    phoneLead: "ターミナルを管理する必要はありません。声でも文字でもVicaに頼めば、コンピューターでターミナルを開いてエージェントに任せ、終わったら会話で答えます。",
    phoneSteps: ["どこからでも依頼でき、作業はコンピューターで進みます。", "ターミナルはコンピューターに開いたまま残り、続きができます。", "スマートフォンとコンピューターの間はエンドツーエンドで暗号化されます。"],
    guide: "中継サーバーの作り方",
    faqTitle: "よくある質問",
    faq: [["vicaは無料ですか？", "はい。アプリは無料で、エージェントはご自身のアカウントで使います。"], ["スマートフォンはどうつなぎますか？", "自分のCloudflareアカウントに置く小さな中継サーバーを通します。ファイルはvicaが作り、デプロイはエージェントに任せられます。"], ["サーバーに費用はかかりますか？", "個人の利用ならCloudflareの無料プランに収まります。1日の上限を超えても翌日まで止まるだけで、請求はされません。"], ["サーバーから作業内容は見えますか？", "見えません。メッセージはスマートフォンとコンピューターだけが持つ鍵で暗号化されます。"], ["コードはコンピューターの外に出ますか？", "利用中のエージェント提供元にのみ、その規約のもとで送られます。当社のサーバーは通りません。"]],
    ctaTitle: "次の依頼を任せてみましょう",
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
    eyebrow: "macOS · 앱 무료", eyebrowRelay: " · 중계 월 US$2 (선택)",
    lead: "말로 맡기면, vica가 끝까지 해냅니다.",
    sub: "Mac에서든 휴대폰에서든 대화 하나로 말하면 됩니다. 이미 쓰는 코딩 에이전트들에게 단계별로 맡기고, 끝나면 보고합니다.",
    mac: "Mac 다운로드 (Apple Silicon)", windows: "Windows · 곧 공개", subscribe: "중계 구독하기",
    howTitle: "이렇게 씁니다",
    how: [
      { t: "요청을 적습니다", d: "Mac의 vica에서도, 휴대폰에서도. 인사에는 답을, 일에는 계획을 돌려줍니다." },
      { t: "vica가 나눠 맡깁니다", d: "단계마다 알맞은 에이전트에게 맡기고, 뒤에서 실행합니다." },
      { t: "어디서든 지켜봅니다", d: "vica나 휴대폰에서 작업을 보고, 질문에 답하고, 멈출 수도 있습니다." },
    ],
    featuresTitle: "기능",
    features: [
      { t: "요청을 끝까지", d: "여러 단계 요청은 계획을 세워 차례로 실행하고, 사람이 정해야 하는 곳에서만 확인을 기다립니다." },
      { t: "역할", d: "설계, 이미지 시안, 구현, 디버깅과 테스트, 리뷰, 화면 확인, 조사, UI·대량 읽기. 리뷰는 구현한 회사와 다른 회사가 맡습니다." },
      { t: "뒤에서 실행", d: "에이전트는 창 없이 실행됩니다. 출력이 저장되어 vica를 닫았다 열어도 이어서 받습니다." },
      { t: "상한과 확인", d: "요청마다 시간과 토큰 상한이 있고, 되돌리기 어려운 일은 먼저 묻습니다." },
      { t: "터미널", d: "탭과 분할, 창을 닫아도 계속 도는 세션, SSH 서버의 프로젝트." },
      { t: "내 에이전트", d: "vica는 사용자 본인의 계정과 요금제로 에이전트를 씁니다. 모델 사용권을 팔지 않습니다." },
    ],
    noLogin: "로그인 없이 그냥 사용하세요.",
    agentsTitle: "이미 쓰는 에이전트 그대로",
    agentsLead: "설치해 둔 CLI를 내 계정과 요금제로 실행합니다. 모델 사용권을 팔지 않습니다.",
    phoneTitle: "휴대폰에서는 대화만",
    phoneLead: "터미널을 관리할 필요가 없습니다. 말이나 글로 Vica에게 맡기면, 컴퓨터에서 터미널을 열어 에이전트에게 지시하고 끝나면 대화로 답합니다.",
    phoneSteps: ["어디서든 요청하고, 일은 컴퓨터가 합니다.", "터미널은 컴퓨터에 열린 채로 남아 이어서 볼 수 있습니다.", "휴대폰과 컴퓨터 사이는 종단 간 암호화됩니다."],
    guide: "연결 서버 구축 가이드",
    faqTitle: "자주 묻는 질문",
    faq: [["vica는 무료인가요?", "네. 앱은 무료이고, 에이전트는 본인 계정으로 씁니다."], ["휴대폰은 어떻게 연결하나요?", "내 Cloudflare 계정에 둔 작은 연결 서버를 거칩니다. 파일은 vica가 만들고, 배포는 에이전트에게 맡기면 됩니다."], ["서버 비용이 드나요?", "한 사람이 쓰기에는 Cloudflare 무료 요금제로 충분합니다. 하루 한도를 넘어도 다음 날까지 멈출 뿐 요금은 나오지 않습니다."], ["서버가 내 작업을 볼 수 있나요?", "없습니다. 메시지는 휴대폰과 컴퓨터만 가진 키로 암호화됩니다."], ["코드가 컴퓨터 밖으로 나가나요?", "사용 중인 에이전트 제공사로만, 그 회사의 약관에 따라 갑니다. 저희 서버를 거치지 않습니다."]],
    ctaTitle: "다음 요청을 맡겨 보세요",
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

const AGENTS = ["Claude Code", "Codex", "Antigravity", "Grok", "Muse Code"];

const H2 = ({ children }: { children: string }) => <h2 className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>;

// One small line icon per feature, in the order of `features`.
const ICONS = [
  "M5 12l4 4L19 6",
  "M8 7a3 3 0 1 0 0 .01M16 7a3 3 0 1 0 0 .01M3 20c0-3 2.5-5 5-5s5 2 5 5M13 20c0-2.2 1.5-4.2 3-4.8 2.4-.6 5 1.3 5 4.8",
  "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18",
  "M12 3l8 4v5c0 4.5-3.3 8-8 9-4.7-1-8-4.5-8-9V7z",
  "M4 5h16v14H4zM8 10l3 2-3 2M13 15h3",
  "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21c0-4 3.6-6 8-6s8 2 8 6",
];

export default function Vica({ lang }: { lang: Lang }) {
  const t = text[lang];
  const link = "underline underline-offset-4";
  return (
    <>
      <Header lang={lang} path="/vica" />
      <main lang={lang} className="mx-auto max-w-6xl px-6">
        <section className="pt-20 pb-14 text-center sm:pt-28">
          <img src="/vica-icon.png" alt="" className="mx-auto h-20 w-20 rounded-[22px] shadow-[0_12px_30px_-10px_rgba(0,0,0,.35)]" />
          <p className="mt-8 text-sm font-medium text-[var(--muted)]">{t.eyebrow}<span className="hidden">{t.eyebrowRelay}</span></p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">vica</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">{t.lead}</p>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">{t.sub}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={DOWNLOAD} className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-85">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.6-1-2.6-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z"/></svg>
              {t.mac}
            </a>
            <span aria-disabled="true" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--muted)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M3 5.5l7.5-1v7H3zM11.5 4.4L21 3v8.5h-9.5zM3 12.5h7.5v7L3 18.5zM11.5 12.5H21V21l-9.5-1.4z"/></svg>
              {t.windows}
            </span>
            {/* The relay subscription stays out of sight for now (owner request 2026-10-30). */}
            <a href={SUBSCRIBE} className="hidden rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--bg)]">{t.subscribe}</a>
          </div>
          <p className="mt-5 text-sm text-[var(--muted)]">{t.noLogin}</p>
        </section>

        <section className="pb-24"><VicaScene lang={lang} /></section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.howTitle}</H2>
          <ol className="grid gap-8 md:grid-cols-3">
            {t.how.map((h, i) => (
              <li key={h.t}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ background: "#7c6cf0" }}>{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{h.t}</h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)]">{h.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.agentsTitle}</H2>
          <p className="max-w-2xl leading-relaxed text-[var(--muted)]">{t.agentsLead}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {AGENTS.map((agent) => <li key={agent} className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm">{agent}</li>)}
          </ul>
        </section>

        <section id="phone" className="scroll-mt-20 border-t border-[var(--line)] py-24">
          <H2>{t.phoneTitle}</H2>
          <p className="max-w-2xl leading-relaxed text-[var(--muted)]">{t.phoneLead}</p>
          <ul className="mt-8 max-w-2xl list-disc space-y-3 pl-5">
            {t.phoneSteps.map((step) => <li key={step}>{step}</li>)}
          </ul>
          <p className="mt-8"><Link href={localized(lang, "/vica/relay")} className={link}>{t.guide}</Link></p>
        </section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.featuresTitle}</H2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f, i) => (
              <div key={f.t} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-7 transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,.25)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(124,108,240,.12)]" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#7c6cf0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={ICONS[i]} /></svg>
                </span>
                <h3 className="mt-5 font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{f.d}</p>
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

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.privacyTitle}</H2>
          <p className="max-w-3xl leading-relaxed text-[var(--muted)]">{t.privacy} <Link href={localized(lang, "/privacy")} className={link}>{t.policy}</Link></p>
        </section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.reqTitle}</H2>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-[var(--muted)]">
            {t.req.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </section>

        <section className="border-t border-[var(--line)] py-24">
          <H2>{t.faqTitle}</H2>
          <dl className="max-w-3xl space-y-8">
            {t.faq.map(([q, answer]) => (
              <div key={q}>
                <dt className="font-semibold">{q}</dt>
                <dd className="mt-2 leading-relaxed text-[var(--muted)]">{answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-[var(--line)] py-24 text-center">
          <H2>{t.ctaTitle}</H2>
          <a href={DOWNLOAD} className="inline-block rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-[var(--bg)]">{t.mac}</a>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
