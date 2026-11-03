import { pageMetadata } from "@/content/seo";
import type { Metadata } from "next";
import { type Lang } from "@/content/i18n";
import { Header, Footer } from "@/components/Chrome";
import { PageSchema } from "@/components/StructuredData";
import RelayAccordion, { type RelayLabels } from "@/views/RelayAccordion";

type GuideText = {
  h1: string; lead: string; needTitle: string; need: string[];
  stepsTitle: string; steps: [string, string][]; prompt: string; self: string;
  folder: string; helpTitle: string; help: [string, string][]; limits: string;
  labels: RelayLabels;
};

const text = {
  en: {
    h1: "Set up your relay server",
    lead: "Connect your phone and computer through a server on your own Cloudflare account. Follow the same four steps from either app.",
    needTitle: "Before you start",
    need: [
      "The app on your computer, with its relay server settings open.",
      "A Cloudflare account. You can start on the free plan; no domain is needed.",
      "Node.js for the deploy command. Your coding agent can install it if needed.",
      "Keep the access token the app creates. You will use it with the server address."
    ],
    stepsTitle: "Four steps to connect",
    steps: [
      ["Create the files", "Open the app’s relay server settings and choose Create server files. The app creates a folder in your home folder and fills in the access token. Keep both for the next step."],
      ["Deploy the server", "Paste the request below into your coding agent. Sign in to Cloudflare when the browser opens. After deployment, save the https address the agent gives you."],
      ["Save the address", "Return to the app’s relay server settings. Enter the https address and save. Keep the access token from step 1; do not add /ws or any other path to the address."],
      ["Pair your phone", "Show a new QR code in the app and scan it with your phone. Check that your phone connects. To check access away from home, turn off the phone’s Wi-Fi briefly and try over mobile data."]
    ],
    prompt: "Find the relay server folder this app created in my home folder and deploy it to my Cloudflare account. If there is more than one relay project, ask which folder to use. Keep the existing settings and access token; do not print the token. In that folder, run npx wrangler login so I can sign in, then npx wrangler deploy. When it finishes, tell me the https server address.",
    self: "Doing it yourself? Open a terminal in the generated folder, then run:",
    folder: "Server files", helpTitle: "If something goes wrong",
    help: [
      ["Where are the server files?", "Open your home folder in Finder and look for the relay folder created by the app. Its name can differ between apps. If it is missing, choose Create server files again."],
      ["Cloudflare asks for a workers.dev subdomain", "Choose a name when asked. Cloudflare uses it to create your free server address; you do not need to buy a domain."],
      ["The address or token does not match", "Use the https address printed after deployment, without a path. Check that the app’s token matches TOKEN in the generated wrangler.jsonc. Keep the token private."],
      ["It works on Wi-Fi but not on mobile data", "Save the new relay address, then scan a new QR code. Keep the app running on your computer and check that both devices can reach the internet."],
      ["Using another computer or changing the token", "Use the same server address and token on the other computer, then scan its QR code. To change the token, update TOKEN in the server configuration, deploy again and enter the new token in the app."],
      ["It stops working during the day", "Check usage and limits in the Cloudflare dashboard, and any daily limit shown by the app. On Cloudflare’s free plan, operations over a free limit fail; daily limits reset at 00:00 UTC."]
    ],
    limits: "Cloudflare free plan limits",
    labels: { file: "Files", token: "Access token", save: "Save", files: "Create server files", copy: "Copy request", copied: "Copied", copyFailed: "Could not copy. Select the request above and copy it manually.", prev: "Back", next: "Next", server: "Relay server", yourMac: "Your computer", yourPhone: "Your phone", scan: "QR" }
  },
  ja: {
    h1: "中継サーバーの作り方",
    lead: "自分のCloudflareアカウントに作ったサーバーで、スマートフォンとコンピューターをつなぎます。どちらのアプリでも、手順は同じ4つです。",
    needTitle: "始める前に",
    need: [
      "コンピューターのアプリで、接続サーバーの設定を開きます。",
      "Cloudflareアカウント。無料プランで始められ、独自ドメインは不要です。",
      "デプロイコマンド用のNode.js。必要ならコーディングエージェントにインストールを頼めます。",
      "アプリが作る接続トークン。サーバーのアドレスと一緒に使います。"
    ],
    stepsTitle: "接続までの4つの手順",
    steps: [
      ["ファイルを作成", "アプリの接続サーバー設定で「サーバーファイルを作成」を押します。ホームフォルダーにフォルダーができ、接続トークンが入力されます。そのまま次へ進みます。"],
      ["サーバーをデプロイ", "下の依頼文をコーディングエージェントに貼り付けます。ブラウザーが開いたらCloudflareにサインインし、完了後に案内されるhttpsアドレスを控えます。"],
      ["アドレスを保存", "アプリの接続サーバー設定に戻り、httpsアドレスを入れて保存します。手順1の接続トークンはそのまま使います。アドレスの後ろに /ws などのパスは付けません。"],
      ["スマートフォンを接続", "アプリで新しいQRコードを表示し、スマートフォンで読み取って接続を確認します。外出先でも使えるか確かめるには、スマートフォンのWi-Fiを一時的に切ってモバイル通信で試します。"]
    ],
    prompt: "このアプリがホームフォルダーに作った中継サーバーのフォルダーを探し、自分のCloudflareアカウントにデプロイして。候補が複数あれば、使うフォルダーを先に確認して。既存の設定と接続トークンは変えず、トークンは表示しないで。そのフォルダーで npx wrangler login を実行してサインインできるようにしてから、npx wrangler deploy を実行し、完了後にhttpsのサーバーアドレスを教えて。",
    self: "自分で実行する場合は、作成されたフォルダーでターミナルを開いてから:",
    folder: "サーバーファイル", helpTitle: "うまくいかないとき",
    help: [
      ["サーバーファイルはどこ？", "Finderでホームフォルダーを開き、アプリが作った中継サーバーのフォルダーを探します。フォルダー名はアプリによって異なります。見つからなければ「サーバーファイルを作成」をもう一度押してください。"],
      ["workers.devのサブドメインを聞かれる", "好きな名前を指定します。Cloudflareが無料のサーバーアドレスを用意するので、ドメインを購入する必要はありません。"],
      ["アドレスかトークンが合わない", "デプロイ後に表示されたhttpsアドレスを、後ろにパスを付けずに入力します。アプリのトークンが、作成した wrangler.jsonc のTOKENと一致しているか確認してください。トークンは他人に見せないでください。"],
      ["Wi-Fiでは使えるのにモバイル通信ではつながらない", "新しいサーバーアドレスを保存してから、新しいQRコードを読み取ります。コンピューターのアプリを起動したまま、両方の端末がインターネットに接続できるか確認してください。"],
      ["別のコンピューターで使う・トークンを変える", "別のコンピューターに同じサーバーアドレスとトークンを入れ、そのQRコードを読み取ります。トークンを変えるときは、サーバー設定のTOKENを更新して再デプロイし、アプリにも新しい値を入れます。"],
      ["1日の途中で止まる", "Cloudflareのダッシュボードの使用量・上限と、アプリに表示される1日の上限を確認します。無料プランでは上限を超えた操作がエラーになり、1日の上限はUTC 0時にリセットされます。"]
    ],
    limits: "Cloudflareの無料プランの上限",
    labels: { file: "ファイル", token: "接続トークン", save: "保存", files: "サーバーファイルを作成", copy: "依頼文をコピー", copied: "コピーしました", copyFailed: "コピーできませんでした。上の依頼文を選択してコピーしてください。", prev: "戻る", next: "次へ", server: "接続サーバー", yourMac: "コンピューター", yourPhone: "スマートフォン", scan: "QR" }
  },
  ko: {
    h1: "연결 서버 구축 가이드",
    lead: "내 Cloudflare 계정에 서버를 만들어 휴대폰과 컴퓨터를 연결합니다. 어느 앱에서 시작하든 아래 네 단계는 같습니다.",
    needTitle: "시작하기 전에",
    need: [
      "컴퓨터의 앱에서 연결 서버 설정을 열어 둡니다.",
      "Cloudflare 계정을 준비합니다. 무료 요금제로 시작할 수 있고, 도메인은 없어도 됩니다.",
      "배포 명령에는 Node.js가 필요합니다. 없으면 코딩 에이전트에게 설치를 맡겨도 됩니다.",
      "앱이 만든 접속 토큰을 그대로 보관합니다. 서버 주소와 함께 사용합니다."
    ],
    stepsTitle: "연결까지 네 단계",
    steps: [
      ["서버 파일 만들기", "앱의 연결 서버 설정에서 ‘서버 파일 만들기’를 누릅니다. 홈 폴더에 서버 폴더가 생기고 접속 토큰이 채워집니다. 그대로 두고 다음 단계로 넘어갑니다."],
      ["서버 배포하기", "아래 요청문을 코딩 에이전트에게 붙여 넣습니다. 브라우저가 열리면 Cloudflare에 로그인하고, 배포가 끝나면 에이전트가 알려 주는 https 주소를 받아 둡니다."],
      ["주소 넣고 저장", "앱의 연결 서버 설정으로 돌아와 https 주소를 넣고 저장합니다. 1단계의 접속 토큰은 그대로 씁니다. 주소 뒤에 /ws 같은 경로는 붙이지 않습니다."],
      ["휴대폰 연결하기", "앱에서 새 QR 코드를 표시해 휴대폰으로 찍고 연결되는지 확인합니다. 집 밖에서도 쓸 수 있는지 보려면 휴대폰의 와이파이를 잠시 끄고 모바일 데이터로 시험해 보세요."]
    ],
    prompt: "이 앱이 홈 폴더에 만든 중계 서버 폴더를 찾아 내 Cloudflare 계정에 배포해 줘. 중계 서버 프로젝트가 여러 개면 어느 폴더를 쓸지 먼저 확인해 줘. 기존 설정과 접속 토큰은 유지하고 토큰은 출력하지 마. 해당 폴더에서 npx wrangler login으로 로그인하게 한 다음 npx wrangler deploy를 실행해 줘. 끝나면 https 서버 주소를 알려 줘.",
    self: "직접 실행하려면, 생성된 폴더에서 터미널을 연 다음:",
    folder: "서버 파일 폴더", helpTitle: "문제가 생기면",
    help: [
      ["서버 파일은 어디에 있나요?", "Finder에서 홈 폴더를 열어 앱이 만든 중계 서버 폴더를 찾으세요. 폴더 이름은 앱마다 다를 수 있습니다. 없다면 앱에서 ‘서버 파일 만들기’를 다시 누릅니다."],
      ["workers.dev 하위 도메인을 물어봐요", "원하는 이름을 정하면 됩니다. Cloudflare가 무료 서버 주소를 만들어 주므로 도메인을 살 필요는 없습니다."],
      ["주소나 토큰이 맞지 않다고 나와요", "배포 후 표시된 https 주소를 경로 없이 넣었는지 확인하세요. 앱의 접속 토큰은 생성된 wrangler.jsonc 파일의 TOKEN 값과 같아야 합니다. 토큰은 다른 사람에게 공개하지 마세요."],
      ["와이파이에서는 되는데 모바일 데이터에서는 안 돼요", "새 서버 주소를 저장한 뒤 새 QR 코드를 찍으세요. 컴퓨터의 앱을 켜 둔 상태에서 두 기기 모두 인터넷에 연결되어 있는지도 확인합니다."],
      ["다른 컴퓨터에서 쓰거나 토큰을 바꾸려면?", "다른 컴퓨터에 같은 서버 주소와 토큰을 넣고 그 컴퓨터의 QR 코드를 찍습니다. 토큰을 바꿀 때는 서버 설정의 TOKEN을 수정해 다시 배포하고, 앱에도 새 토큰을 넣습니다."],
      ["하루 중간에 연결이 끊겨요", "Cloudflare 대시보드의 사용량·한도와 앱에 표시되는 일일 한도를 확인하세요. 무료 요금제에서는 무료 한도를 넘은 작업이 실패하며, 일일 한도는 UTC 자정(한국 오전 9시)에 초기화됩니다."]
    ],
    limits: "Cloudflare 무료 요금제 한도",
    labels: { file: "파일", token: "접속 토큰", save: "저장", files: "서버 파일 만들기", copy: "요청문 복사", copied: "복사했습니다", copyFailed: "복사하지 못했습니다. 위 요청문을 직접 선택해 복사해 주세요.", prev: "이전", next: "다음", server: "연결 서버", yourMac: "내 컴퓨터", yourPhone: "내 휴대폰", scan: "QR" }
  }
} satisfies Record<Lang, GuideText>;

export function relayMetadata(lang: Lang): Metadata {
  const { h1, lead } = text[lang];
  return pageMetadata(lang, "/relay", `${h1} | Tory Labs`, lead);
}

export default function Relay({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <>
      <PageSchema lang={lang} path="/relay" title={t.h1} description={t.lead} questions={t.help} />
      <Header lang={lang} path="/relay" />
      <main lang={lang} className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        {/* Released apps may still link to these fragments. Both lead to the common guide. */}
        <span id="vica" className="block scroll-mt-24" />
        <span id="voin" className="block scroll-mt-24" />
        <h1 className="mb-5 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">{t.h1}</h1>
        <p className="max-w-2xl leading-relaxed text-[var(--muted)]">{t.lead}</p>
        <nav aria-label={t.h1} className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
          <a href="#prepare" className="underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--fg)]">{t.needTitle}</a>
          <a href="#steps" className="underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--fg)]">{t.stepsTitle}</a>
          <a href="#help" className="underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--fg)]">{t.helpTitle}</a>
        </nav>
        <section id="prepare" className="scroll-mt-24 border-y border-[var(--line)] py-9 mt-10">
          <h2 className="mb-5 text-xl font-semibold">{t.needTitle}</h2>
          <ul className="grid gap-x-12 gap-y-3 pl-5 leading-relaxed text-[var(--muted)] md:grid-cols-2 list-disc">
            {t.need.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section id="steps" className="scroll-mt-24 pt-12">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">{t.stepsTitle}</h2>
          <div className="relay-interactive">
            <RelayAccordion steps={t.steps} prompt={t.prompt} selfLabel={t.self} labels={t.labels} folder={t.folder} address="https://my-relay.example.workers.dev" />
          </div>
          <noscript>
            <style>{".relay-interactive { display: none; }"}</style>
            <ol className="list-decimal space-y-6 pl-5">
              {t.steps.map(([title, body]) => <li key={title}><h3 className="font-semibold">{title}</h3><p className="mt-2 leading-relaxed">{body}</p></li>)}
            </ol>
            <p className="mt-6 whitespace-pre-wrap break-words rounded-xl border border-[var(--line)] p-5">{t.prompt}</p>
            <p className="mt-5">{t.self}</p>
            <pre className="mt-2 overflow-x-auto text-sm"><code>{"npx wrangler login\nnpx wrangler deploy"}</code></pre>
          </noscript>
        </section>
        <section id="help" className="scroll-mt-24 pt-14">
          <span id="faq" />
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">{t.helpTitle}</h2>
          <div className="grid items-start gap-3 md:grid-cols-2">
            {t.help.map(([question, answer]) => (
              <details key={question} className="surface rounded-xl px-5 py-4">
                <summary className="cursor-pointer font-medium leading-relaxed">{question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-5 text-sm text-[var(--muted)]"><a href="https://developers.cloudflare.com/durable-objects/platform/pricing/" target="_blank" rel="noreferrer" className="underline underline-offset-4">{t.limits} ↗</a></p>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
