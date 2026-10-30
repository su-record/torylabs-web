import type { Lang } from "@/content/i18n";
import VicaRelayAccordion from "@/views/VicaRelayAccordion";

// The guide to one's own relay, a section of the vica page. The steps follow vica's settings
// (subscription-view.js, phone.rs in the vica repository); Settings → Relay server → Build links
// here (owner request 2026-10-30).
const text = {
  "en": {
    "h1": "Set up your relay server",
    "lead": "The relay links your phone and vica. Make your own on a free Cloudflare account: vica writes the files and your agent can deploy them.",
    "needTitle": "You need",
    "need": [
      "vica on your Mac.",
      "A Cloudflare account. The free plan is enough.",
      "Node.js, for the deploy command. Your agent can install it."
    ],
    "stepsTitle": "Steps",
    "s1": [
      "Create the server files",
      "In vica, open Settings → General → Relay server → Build, and press Create server files. This creates the vica-relay folder in your home folder and fills in the access token."
    ],
    "s2": [
      "Deploy it",
      "Paste this to your agent in a terminal tab:"
    ],
    "prompt": "Deploy the ~/vica-relay folder to my Cloudflare account. Run npx wrangler login so I can sign in, then npx wrangler deploy, and tell me the server address it prints.",
    "self": "Or run it yourself:",
    "s3": [
      "Enter the address",
      "Enter the https address in Settings → Relay server and press Save. The access token is already there."
    ],
    "s4": [
      "Pair your phone",
      "Under Phone in Settings, press Show QR code and scan it. Do this once on each computer."
    ],
    "helpTitle": "If something goes wrong",
    "help": [
      [
        "It says the address or token does not match",
        "Use the token value in ~/vica-relay/wrangler.jsonc. Then check the address starts with https:// and has no path after it."
      ],
      [
        "Using a second computer",
        "Enter the same address and token in vica there, then scan that computer's QR code."
      ],
      [
        "Changing the token",
        "Change the TOKEN value in wrangler.jsonc, deploy again, and enter the new token in vica. Keep it private: with it, someone else could use your server's free allowance."
      ],
      [
        "Cloudflare asks for a workers.dev subdomain",
        "This appears the first time you use Workers. Pick any name; it becomes part of your address."
      ],
      [
        "It stops working partway through a day",
        "The free plan allows 100,000 requests a day. Past that it stops until 00:00 UTC, and you are not charged."
      ]
    ],
    "labels": {
      "file": "Files",
      "token": "Access token",
      "save": "Save",
      "files": "Create server files",
      "copy": "Copy",
      "copied": "Copied",
      "prev": "Back",
      "next": "Next",
      "server": "Relay server",
      "yourMac": "Your Mac",
      "yourPhone": "Your phone",
      "scan": "QR"
    }
  },
  "ja": {
    "h1": "中継サーバーの作り方",
    "lead": "中継サーバーはスマートフォンとvicaをつなぎます。無料のCloudflareアカウントに作成でき、ファイルはvicaが作り、デプロイはエージェントに任せられます。",
    "needTitle": "必要なもの",
    "need": [
      "Macのvica。",
      "Cloudflareアカウント。無料プランで十分です。",
      "デプロイコマンド用のNode.js。エージェントがインストールできます。"
    ],
    "stepsTitle": "手順",
    "s1": [
      "サーバーファイルを作成",
      "vicaの設定 → 全般 → 接続サーバー → 構築で「サーバーファイルを作成」を押します。ホームフォルダーにvica-relayフォルダーができ、接続トークンが入力されます。"
    ],
    "s2": [
      "デプロイ",
      "ターミナルタブのエージェントにこれを貼り付けます:"
    ],
    "prompt": "~/vica-relay フォルダーを自分のCloudflareアカウントにデプロイして。npx wrangler login でサインインできるようにしてから npx wrangler deploy を実行し、表示されたサーバーアドレスを教えて。",
    "self": "自分で実行する場合:",
    "s3": [
      "アドレスを入力",
      "httpsアドレスを設定 → 接続サーバーに入れて保存します。接続トークンはすでに入っています。"
    ],
    "s4": [
      "スマートフォンをペアリング",
      "設定のスマートフォンでQRコードを表示して読み取ります。コンピューターごとに1回行います。"
    ],
    "helpTitle": "うまくいかないとき",
    "help": [
      [
        "アドレスかトークンが合わないと表示される",
        "~/vica-relay/wrangler.jsonc のTOKENの値を使ってください。アドレスが https:// で始まり、後ろにパスがないことも確認します。"
      ],
      [
        "2台目のコンピューターで使う",
        "そのコンピューターのvicaに同じアドレスとトークンを入れ、そのQRコードを読み取ります。"
      ],
      [
        "トークンを変える",
        "wrangler.jsonc のTOKENを変えて再度デプロイし、vicaに新しいトークンを入れます。トークンは他人に見せないでください。知られると無料枠を使われることがあります。"
      ],
      [
        "workers.devのサブドメインを聞かれる",
        "Workersを初めて使うときに表示されます。好きな名前で構いません。アドレスの一部になります。"
      ],
      [
        "1日の途中で止まる",
        "無料プランは1日100,000リクエストまでです。超えるとUTC 0時まで止まりますが、請求はされません。"
      ]
    ],
    "labels": {
      "file": "ファイル",
      "token": "接続トークン",
      "save": "保存",
      "files": "サーバーファイルを作成",
      "copy": "コピー",
      "copied": "コピーしました",
      "prev": "戻る",
      "next": "次へ",
      "server": "接続サーバー",
      "yourMac": "Mac",
      "yourPhone": "スマートフォン",
      "scan": "QR"
    }
  },
  "ko": {
    "h1": "연결 서버 구축 가이드",
    "lead": "연결 서버는 휴대폰과 vica를 잇습니다. 무료 Cloudflare 계정에 만들 수 있고, 파일은 vica가 만들고 배포는 에이전트에게 맡기면 됩니다.",
    "needTitle": "준비물",
    "need": [
      "Mac의 vica.",
      "Cloudflare 계정. 무료 요금제로 충분합니다.",
      "배포 명령에 쓰는 Node.js. 에이전트가 설치할 수 있습니다."
    ],
    "stepsTitle": "순서",
    "s1": [
      "서버 파일 만들기",
      "vica 설정 → 전체 → 연결 서버 → 구축에서 서버 파일 만들기를 누릅니다. 홈 폴더에 vica-relay 폴더가 생기고 접속 토큰이 채워집니다."
    ],
    "s2": [
      "배포하기",
      "터미널 탭의 에이전트에게 이 문장을 붙여 넣습니다:"
    ],
    "prompt": "~/vica-relay 폴더를 내 Cloudflare 계정에 배포해 줘. npx wrangler login으로 로그인하게 한 다음 npx wrangler deploy를 실행하고, 나온 서버 주소를 알려 줘.",
    "self": "직접 실행하려면:",
    "s3": [
      "주소 넣기",
      "받은 https 주소를 설정 → 연결 서버에 넣고 저장합니다. 접속 토큰은 이미 들어 있습니다."
    ],
    "s4": [
      "휴대폰 연결",
      "설정의 휴대폰 항목에서 QR 코드를 보고 찍습니다. 컴퓨터마다 한 번씩 합니다."
    ],
    "helpTitle": "문제가 생기면",
    "help": [
      [
        "주소나 토큰이 맞지 않는다고 나올 때",
        "~/vica-relay/wrangler.jsonc의 TOKEN 값을 넣으세요. 주소가 https://로 시작하고 뒤에 경로가 없는지도 확인합니다."
      ],
      [
        "다른 컴퓨터에서도 쓸 때",
        "그 컴퓨터의 vica에 같은 주소와 토큰을 넣고, 그 컴퓨터의 QR 코드를 찍습니다."
      ],
      [
        "토큰을 바꿀 때",
        "wrangler.jsonc의 TOKEN을 바꿔 다시 배포하고, vica에 새 토큰을 넣습니다. 토큰은 남에게 보이지 마세요. 알려지면 무료 한도를 남이 쓸 수 있습니다."
      ],
      [
        "workers.dev 하위 도메인을 물을 때",
        "Workers를 처음 쓸 때 나옵니다. 원하는 이름을 정하면 주소의 일부가 됩니다."
      ],
      [
        "하루 중간에 멈출 때",
        "무료 요금제는 하루 100,000건까지입니다. 넘으면 UTC 자정(한국 오전 9시)까지 멈추지만 요금은 나오지 않습니다."
      ]
    ],
    "labels": {
      "file": "파일",
      "token": "접속 토큰",
      "save": "저장",
      "files": "서버 파일 만들기",
      "copy": "복사",
      "copied": "복사했습니다",
      "prev": "이전",
      "next": "다음",
      "server": "연결 서버",
      "yourMac": "내 Mac",
      "yourPhone": "내 휴대폰",
      "scan": "QR"
    }
  }
} satisfies Record<Lang, unknown>;

const H3 = ({ children }: { children: string }) => <h3 className="mb-4 mt-12 font-semibold">{children}</h3>;

export default function VicaRelay({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <section id="relay" className="scroll-mt-20 border-t border-[var(--line)] py-24">
      <h2 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">{t.h1}</h2>
      <p className="mb-10 max-w-2xl leading-relaxed text-[var(--muted)]">{t.lead}</p>
      <VicaRelayAccordion steps={[t.s1, t.s2, t.s3, t.s4] as [string, string][]} prompt={t.prompt} selfLabel={t.self} labels={t.labels} />
      <div className="grid gap-x-12 md:grid-cols-2">
        <div>
          <H3>{t.needTitle}</H3>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-[var(--muted)]">
            {t.need.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <H3>{t.helpTitle}</H3>
          <div className="space-y-2">
            {t.help.map(([q, answer]) => (
              <details key={q} className="rounded-xl border border-[var(--line)] bg-[var(--card)] px-4 py-3">
                <summary className="cursor-pointer text-sm font-medium">{q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
