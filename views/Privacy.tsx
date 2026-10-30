import type { Metadata } from "next";
import { alternates, type Lang } from "@/content/i18n";
import { LegalPage } from "@/components/Chrome";
import { company } from "@/content/company";

const UPDATED = { en: "October 30, 2026", ja: "2026年10月30日", ko: "2026년 10월 30일" };
const title = { en: "Privacy Policy", ja: "プライバシーポリシー", ko: "개인정보처리방침" };
const mail = <a href={`mailto:${company.email}`}>{company.email}</a>;
const paddlePolicy = <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer">Paddle Privacy Policy</a>;

const body: Record<Lang, React.ReactNode> = {
  en: (
    <>
      <p>This Privacy Policy explains how Tory Labs (&quot;we&quot;, &quot;us&quot;) handles information across our website, our products, our paid subscription, and our content automation tools.</p>

      <h2>This website</h2>
      <p>torylabs.dev does not collect personal data. It uses no cookies, no analytics, and no tracking. If you choose a language, that choice is kept in your browser only. If you email us, we use your message and address only to reply.</p>

      <h2>Our products</h2>
      <p>Our products are designed to run on your own device whenever possible.</p>
      <ul>
        <li><strong>vica</strong> runs on your computer. Your code and prompts go from your computer to the agent providers you use (such as Anthropic, OpenAI, Google, xAI or Meta), under their terms; they do not pass through our servers. To check for updates, vica sends its platform, CPU architecture and version to vica.torylabs.dev. If you entered a subscription key, vica sends it to vica.torylabs.dev to check the subscription.</li>
        <li><strong>voin</strong> processes audio, transcription, and meeting notes locally on your computer. It does not send your audio or transcripts to our servers. If you choose to enable an optional third-party service or model, that provider&apos;s terms and privacy policy apply to data you send to it.</li>
        <li><strong>vibe</strong> runs locally alongside the AI coding tools you already use. We do not collect your code or project data through it.</li>
        <li><strong>Tory</strong> may have its own privacy notice within the service, which applies in addition to this policy.</li>
      </ul>

      <h2>vica relay subscription</h2>
      <p>The subscription needs no account.</p>
      <ul>
        <li><strong>Payment.</strong> Paddle.com, our Merchant of Record, collects your payment details, email, and billing country under the {paddlePolicy}. We never see your card details.</li>
        <li><strong>What we keep.</strong> Your subscription key, and from Paddle the subscription ID, customer ID, subscription status and next billing date. They are stored on Cloudflare, our hosting provider.</li>
        <li><strong>Your email.</strong> When the subscription starts, we get your email from Paddle once to send you the key through Resend, our email provider. We do not store it. If you recover a lost key, the email and transaction ID you enter are checked with Paddle and not stored.</li>
        <li><strong>Retention.</strong> We keep the subscription record while the subscription exists. After it ends, email us to have it deleted.</li>
      </ul>

      <h2>Social media publishing tools</h2>
      <p>Tory Labs operates automation tools that publish content to social media platforms on behalf of the account owner.</p>
      <p><strong>Information we access.</strong> With your explicit authorization through each platform&apos;s OAuth flow, our application may access:</p>
      <ul>
        <li>Your basic profile information (such as name and account/profile ID) on the connected platform (e.g., LinkedIn, Instagram, YouTube, X, Threads).</li>
        <li>Permission to create and publish posts, images, and videos on your behalf on the accounts you connect.</li>
      </ul>
      <p><strong>How we use it.</strong> We use this access solely to publish content that you create and approve. We do not sell, rent, or share your data with any third party, and we do not use it for advertising or profiling.</p>
      <p><strong>Data storage.</strong> Access tokens are stored securely and used only to perform the actions you authorize. We retain only what is necessary to operate the service, and we do not store the content of your social accounts beyond what is needed to publish your approved posts.</p>
      <p><strong>Your control.</strong> You may revoke the application&apos;s access at any time from the connected platform&apos;s settings (for example, on LinkedIn: Settings → Data privacy → Permitted services). Revoking access immediately stops all future actions.</p>
      <p><strong>Third-party platforms.</strong> When you connect a social platform, that platform&apos;s own privacy policy and terms govern your use of it. We act only within the permissions you grant.</p>

      <h2>Changes</h2>
      <p>We may update this policy from time to time. Changes take effect when posted on this page, with the &quot;Last updated&quot; date revised.</p>

      <h2>Contact</h2>
      <p>For any questions about this policy, contact us at {mail}.</p>
    </>
  ),
  ja: (
    <>
      <p>本プライバシーポリシーは、Tory Labs（以下「当社」）が、ウェブサイト、製品、有料サブスクリプション、コンテンツ自動化ツールで情報をどう扱うかを説明します。翻訳と英語版が異なる場合は英語版が優先します。</p>

      <h2>このウェブサイト</h2>
      <p>torylabs.devは個人データを収集しません。Cookie、アクセス解析、トラッキングは使いません。言語を選ぶと、その選択はお使いのブラウザにだけ保存されます。メールをいただいた場合、その内容とアドレスは返信のためだけに使います。</p>

      <h2>当社の製品</h2>
      <p>当社の製品は、できる限りユーザーのデバイス上で動くよう作られています。</p>
      <ul>
        <li><strong>vica</strong>はお使いのパソコンで動きます。コードとプロンプトは、パソコンから利用中のエージェント提供元（Anthropic、OpenAI、Google、xAI、Metaなど）へ、その提供元の規約のもとで送られ、当社のサーバーは通りません。更新の確認のため、vicaはプラットフォーム、CPUアーキテクチャ、バージョンをvica.torylabs.devに送ります。サブスクリプションキーを入力した場合は、購読状態の確認のためにそのキーをvica.torylabs.devに送ります。</li>
        <li><strong>voin</strong>は音声、文字起こし、会議メモをパソコン上で処理します。音声や文字起こしを当社のサーバーに送りません。任意の第三者サービスやモデルを有効にした場合、送るデータにはその提供元の規約とプライバシーポリシーが適用されます。</li>
        <li><strong>vibe</strong>は、すでにお使いのAIコーディングツールと一緒にローカルで動きます。vibeを通じてコードやプロジェクトのデータを収集しません。</li>
        <li><strong>Tory</strong>には、サービス内に独自のプライバシー通知がある場合があり、本ポリシーに加えて適用されます。</li>
      </ul>

      <h2>vica 中継サブスクリプション</h2>
      <p>サブスクリプションにアカウントは不要です。</p>
      <ul>
        <li><strong>支払い。</strong>当社の販売者（Merchant of Record）であるPaddle.comが、{paddlePolicy}に基づいて支払い情報、メールアドレス、請求国を収集します。当社がカード情報を見ることはありません。</li>
        <li><strong>当社が保存するもの。</strong>サブスクリプションキーと、Paddleから受け取るサブスクリプションID、顧客ID、購読状態、次回請求日。これらはホスティング事業者のCloudflareに保存されます。</li>
        <li><strong>メールアドレス。</strong>購読開始時に一度だけPaddleからメールアドレスを取得し、メール配信事業者のResendを通じてキーを送ります。メールアドレスは保存しません。紛失したキーを再取得する際に入力したメールアドレスと取引IDはPaddleで照合し、保存しません。</li>
        <li><strong>保存期間。</strong>購読が続く間は記録を保存します。購読終了後に削除を希望する場合はメールでご連絡ください。</li>
      </ul>

      <h2>ソーシャルメディア投稿ツール</h2>
      <p>Tory Labsは、アカウント所有者に代わってソーシャルメディアにコンテンツを投稿する自動化ツールを運用しています。</p>
      <p><strong>アクセスする情報。</strong>各プラットフォームのOAuthで明示的に許可された場合、当社のアプリケーションは次にアクセスすることがあります。</p>
      <ul>
        <li>連携したプラットフォーム（LinkedIn、Instagram、YouTube、X、Threadsなど）の基本プロフィール情報（名前、アカウント／プロフィールIDなど）。</li>
        <li>連携したアカウントで、ユーザーに代わって投稿、画像、動画を作成・公開する権限。</li>
      </ul>
      <p><strong>利用方法。</strong>このアクセスは、ユーザーが作成し承認したコンテンツを投稿するためだけに使います。データを第三者に販売、貸与、共有せず、広告やプロファイリングにも使いません。</p>
      <p><strong>データの保存。</strong>アクセストークンは安全に保存し、許可された操作のためだけに使います。サービスの運用に必要なものだけを保持し、承認済みの投稿に必要な範囲を超えてソーシャルアカウントの内容を保存しません。</p>
      <p><strong>ユーザーの管理。</strong>連携したプラットフォームの設定から、いつでもアプリケーションのアクセスを取り消せます（例：LinkedInでは 設定 → データのプライバシー → 許可されたサービス）。取り消すと以後のすべての操作が直ちに止まります。</p>
      <p><strong>第三者プラットフォーム。</strong>ソーシャルプラットフォームを連携した場合、その利用にはそのプラットフォーム自身のプライバシーポリシーと規約が適用されます。当社は許可された範囲内でのみ動作します。</p>

      <h2>変更</h2>
      <p>本ポリシーは随時更新することがあります。変更はこのページに掲載し「最終更新」日を改めた時点で効力を持ちます。</p>

      <h2>お問い合わせ</h2>
      <p>本ポリシーに関するご質問は{mail}までご連絡ください。</p>
    </>
  ),
  ko: (
    <>
      <p>이 개인정보처리방침은 Tory Labs(&quot;저희&quot;)가 웹사이트, 제품, 유료 구독, 콘텐츠 자동화 도구에서 정보를 어떻게 다루는지 설명합니다. 번역본과 영문본이 다르면 영문본을 따릅니다.</p>

      <h2>이 웹사이트</h2>
      <p>torylabs.dev는 개인정보를 수집하지 않습니다. 쿠키, 분석 도구, 추적을 쓰지 않습니다. 언어를 고르면 그 선택은 사용자의 브라우저에만 저장됩니다. 메일을 보내시면 그 내용과 주소는 답장에만 씁니다.</p>

      <h2>저희 제품</h2>
      <p>저희 제품은 가능한 한 사용자의 기기에서 돌아가도록 만듭니다.</p>
      <ul>
        <li><strong>vica</strong>는 사용자의 컴퓨터에서 돌아갑니다. 코드와 프롬프트는 컴퓨터에서 사용 중인 에이전트 제공사(Anthropic, OpenAI, Google, xAI, Meta 등)로, 그 회사의 약관에 따라 바로 가며 저희 서버를 거치지 않습니다. 업데이트를 확인하려고 vica는 플랫폼, CPU 종류, 버전을 vica.torylabs.dev에 보냅니다. 구독 키를 넣었다면 구독 상태를 확인하려고 그 키를 vica.torylabs.dev에 보냅니다.</li>
        <li><strong>voin</strong>은 소리, 받아쓰기, 회의록을 컴퓨터 안에서 처리합니다. 소리나 받아쓴 글을 저희 서버로 보내지 않습니다. 선택 사항인 제3자 서비스나 모델을 켜면, 그곳에 보내는 데이터에는 그 제공사의 약관과 개인정보처리방침이 적용됩니다.</li>
        <li><strong>vibe</strong>는 이미 쓰고 있는 AI 코딩 도구와 함께 로컬에서 돌아갑니다. vibe로 코드나 프로젝트 데이터를 수집하지 않습니다.</li>
        <li><strong>Tory</strong>는 서비스 안에 별도의 개인정보 안내가 있을 수 있으며, 이 방침과 함께 적용됩니다.</li>
      </ul>

      <h2>vica 중계 구독</h2>
      <p>구독에는 계정이 필요 없습니다.</p>
      <ul>
        <li><strong>결제.</strong> 저희 판매자(Merchant of Record)인 Paddle.com이 {paddlePolicy}에 따라 결제 정보, 이메일, 청구 국가를 수집합니다. 저희는 카드 정보를 보지 않습니다.</li>
        <li><strong>저희가 보관하는 것.</strong> 구독 키와, Paddle에서 받은 구독 ID, 고객 ID, 구독 상태, 다음 청구일. 호스팅 업체인 Cloudflare에 저장됩니다.</li>
        <li><strong>이메일.</strong> 구독이 시작될 때 Paddle에서 이메일을 한 번 받아, 메일 발송 업체인 Resend로 키를 보냅니다. 이메일은 저장하지 않습니다. 잃어버린 키를 찾을 때 입력한 이메일과 거래 번호는 Paddle에서 확인만 하고 저장하지 않습니다.</li>
        <li><strong>보관 기간.</strong> 구독이 있는 동안 기록을 보관합니다. 구독이 끝난 뒤 삭제를 원하시면 메일로 알려 주세요.</li>
      </ul>

      <h2>소셜 미디어 게시 도구</h2>
      <p>Tory Labs는 계정 소유자를 대신해 소셜 미디어에 콘텐츠를 게시하는 자동화 도구를 운영합니다.</p>
      <p><strong>접근하는 정보.</strong> 각 플랫폼의 OAuth로 명시적으로 허락하면, 저희 애플리케이션은 다음에 접근할 수 있습니다.</p>
      <ul>
        <li>연결한 플랫폼(LinkedIn, Instagram, YouTube, X, Threads 등)의 기본 프로필 정보(이름, 계정·프로필 ID 등).</li>
        <li>연결한 계정에서 사용자를 대신해 게시물, 이미지, 동영상을 만들고 게시할 권한.</li>
      </ul>
      <p><strong>쓰는 방법.</strong> 이 접근은 사용자가 만들고 승인한 콘텐츠를 게시하는 데만 씁니다. 데이터를 제3자에게 팔거나 빌려주거나 공유하지 않고, 광고나 프로파일링에 쓰지 않습니다.</p>
      <p><strong>데이터 저장.</strong> 액세스 토큰은 안전하게 저장하고 허락받은 작업에만 씁니다. 서비스 운영에 필요한 것만 보관하며, 승인한 게시에 필요한 범위를 넘어 소셜 계정의 내용을 저장하지 않습니다.</p>
      <p><strong>사용자의 통제.</strong> 연결한 플랫폼의 설정에서 언제든 애플리케이션의 접근을 거둘 수 있습니다(예: LinkedIn은 설정 → 데이터 개인정보 → 허용된 서비스). 거두면 이후의 모든 작업이 바로 멈춥니다.</p>
      <p><strong>제3자 플랫폼.</strong> 소셜 플랫폼을 연결하면, 그 이용에는 해당 플랫폼의 개인정보처리방침과 약관이 적용됩니다. 저희는 허락받은 범위 안에서만 움직입니다.</p>

      <h2>변경</h2>
      <p>이 방침은 수시로 바뀔 수 있습니다. 변경은 이 페이지에 게시하고 &quot;최종 수정&quot; 날짜를 고친 때부터 효력이 있습니다.</p>

      <h2>문의</h2>
      <p>이 방침에 관한 문의는 {mail}로 보내 주세요.</p>
    </>
  ),
};

export function privacyMetadata(lang: Lang): Metadata {
  return { title: `${title[lang]} | Tory Labs`, alternates: alternates(lang, "/privacy") };
}

export default function Privacy({ lang }: { lang: Lang }) {
  return <LegalPage lang={lang} path="/privacy" title={title[lang]} updated={UPDATED[lang]}>{body[lang]}</LegalPage>;
}
