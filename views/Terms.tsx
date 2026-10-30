import type { Metadata } from "next";
import Link from "next/link";
import { alternates, localized, type Lang } from "@/content/i18n";
import { LegalPage } from "@/components/Chrome";
import { company } from "@/content/company";

const UPDATED = { en: "October 30, 2026", ja: "2026年10月30日", ko: "2026년 10월 30일" };
const title = { en: "Terms of Service", ja: "利用規約", ko: "이용약관" };
const mail = <a href={`mailto:${company.email}`}>{company.email}</a>;

function body(lang: Lang): React.ReactNode {
  const refund = (label: string) => <Link href={localized(lang, "/refund")}>{label}</Link>;
  if (lang === "ja") return (
    <>
      <p>本規約は、Tory Labsが提供するウェブサイト、製品、ツールの利用に適用されます。利用することで、本規約に同意したものとみなします。翻訳と英語版が異なる場合は英語版が優先します。</p>
      <h2>1. サービス</h2>
      <p>Tory Labsは、オンデバイスAIソフトウェア（vica、voin、vibe）と、アカウント所有者が連携したソーシャルメディアにコンテンツを作成・投稿するための自動化ツールを提供します。自動化ツールは、Tory Labs自身とユーザーのコンテンツ業務のために運用されます。</p>
      <h2>2. ユーザーの責任</h2>
      <p>作成・投稿するコンテンツと、連携する各プラットフォームの規約の遵守はユーザーの責任です。コンテンツの所有権はユーザーにあります。vicaのエージェントは各提供元でのユーザー自身のアカウントで動くため、その提供元の規約の遵守もユーザーの責任です。</p>
      <h2>3. 権限</h2>
      <p>当社のツールは、ユーザーが付与したOAuth権限の範囲内で、ユーザーが開始または承認した操作だけを行います。連携したプラットフォームの設定からいつでも取り消せます。</p>
      <div hidden>
      <h2>4. 有料サブスクリプション</h2>
      <p>ご注文の手続きは、当社のオンライン販売代理店Paddle.comが行います。Paddle.comがすべての注文の販売者（Merchant of Record）です。Paddleが注文に関するお問い合わせと返品に対応します。</p>
      <ul>
        <li>vica 中継サブスクリプションは月額US$4.99または年額US$39.99（該当する税金は別途）で、解約するまで選んだ期間ごとに更新されます。</li>
        <li>支払うとサブスクリプションキーが発行されます。キーを持つ人は誰でもサブスクリプションを使えるため、他人に共有・転売しないでください。</li>
        <li>いつでも解約でき、支払済みの期間が終わるまでキーは有効です。返金は{refund("返金ポリシー")}に従います。</li>
        <li>価格を変更する場合は、少なくとも30日前にこのサイトとvicaでお知らせし、次の請求期間から適用します。</li>
        <li>中継サーバーに過大な負荷をかける、または違法な目的に使うキーは停止することがあります。</li>
      </ul>
      </div>
      <h2>4. オープンソースソフトウェア</h2>
      <p>voinやvibeなど一部の製品はオープンソースで、それぞれのライセンス（例：MITライセンス）で配布されます。その利用には、リポジトリに含まれるライセンスが適用されます。</p>
      <h2>5. 提供状況と免責</h2>
      <p>当社のサービスとソフトウェアは、いかなる保証もない「現状のまま」で提供されます。第三者プラットフォームの障害、API変更、モデレーションの判断について当社は責任を負いません。</p>
      <h2>6. 変更</h2>
      <p>本規約は随時更新することがあります。変更はこのページに掲載した時点で効力を持ちます。</p>
      <h2>7. お問い合わせ</h2>
      <p>本規約に関するご質問：{mail}</p>
    </>
  );
  if (lang === "ko") return (
    <>
      <p>이 약관은 Tory Labs가 제공하는 웹사이트, 제품, 도구의 이용에 적용됩니다. 이용하면 이 약관에 동의한 것으로 봅니다. 번역본과 영문본이 다르면 영문본을 따릅니다.</p>
      <h2>1. 서비스</h2>
      <p>Tory Labs는 온디바이스 AI 소프트웨어(vica, voin, vibe)와, 계정 소유자가 연결한 소셜 미디어에 콘텐츠를 만들고 게시하도록 돕는 자동화 도구를 제공합니다. 자동화 도구는 Tory Labs와 사용자의 콘텐츠 작업을 위해 운영됩니다.</p>
      <h2>2. 사용자의 책임</h2>
      <p>만들고 게시하는 콘텐츠와, 연결한 각 플랫폼의 약관을 지키는 일은 사용자의 책임입니다. 콘텐츠의 소유권은 사용자에게 있습니다. vica의 에이전트는 각 제공사에서 사용자 본인의 계정으로 실행되므로, 그 제공사의 약관을 지키는 일도 사용자의 책임입니다.</p>
      <h2>3. 권한</h2>
      <p>저희 도구는 사용자가 준 OAuth 권한 안에서, 사용자가 시작하거나 승인한 작업만 합니다. 연결한 플랫폼의 설정에서 언제든 권한을 거둘 수 있습니다.</p>
      <div hidden>
      <h2>4. 유료 구독</h2>
      <p>주문 절차는 저희 온라인 판매 대행사 Paddle.com이 진행합니다. 모든 주문의 판매자(Merchant of Record)는 Paddle.com입니다. 주문 문의와 반품은 Paddle이 처리합니다.</p>
      <ul>
        <li>vica 중계 구독은 월 US$4.99 또는 연 US$39.99(해당 세금 별도)이고, 해지할 때까지 고른 주기로 갱신됩니다.</li>
        <li>결제하면 구독 키가 나옵니다. 키를 가진 사람은 누구나 구독을 쓸 수 있으니 남과 나누거나 되팔지 마세요.</li>
        <li>언제든 해지할 수 있고, 결제한 기간이 끝날 때까지 키를 쓸 수 있습니다. 환불은 {refund("환불 정책")}을 따릅니다.</li>
        <li>가격을 바꿀 때는 최소 30일 전에 이 사이트와 vica에 알리고, 다음 청구 기간부터 적용합니다.</li>
        <li>중계 서버에 지나친 부하를 주거나 불법적인 목적에 쓰이는 키는 정지할 수 있습니다.</li>
      </ul>
      </div>
      <h2>4. 오픈소스 소프트웨어</h2>
      <p>voin, vibe 등 일부 제품은 오픈소스이며 각자의 라이선스(예: MIT 라이선스)로 배포됩니다. 그 소프트웨어의 이용에는 저장소에 포함된 라이선스가 적용됩니다.</p>
      <h2>5. 제공과 면책</h2>
      <p>저희 서비스와 소프트웨어는 어떠한 보증도 없이 &quot;있는 그대로&quot; 제공됩니다. 제3자 플랫폼의 장애, API 변경, 운영 정책 판단에 대해 책임지지 않습니다.</p>
      <h2>6. 변경</h2>
      <p>이 약관은 수시로 바뀔 수 있습니다. 변경은 이 페이지에 게시한 때부터 효력이 있습니다.</p>
      <h2>7. 문의</h2>
      <p>이 약관에 관한 문의: {mail}</p>
    </>
  );
  return (
    <>
      <p>These Terms govern your use of the website, products, and tools provided by Tory Labs. By using them, you agree to these Terms.</p>
      <h2>1. Service</h2>
      <p>Tory Labs provides on-device AI software (vica, voin and vibe) and automation tools that help the account owner create and publish content to connected social media platforms. The automation tools are operated for Tory Labs&apos; own and its users&apos; content workflows.</p>
      <h2>2. Your responsibilities</h2>
      <p>You are responsible for the content you create and publish, and for complying with the terms of each platform you connect. You retain ownership of your content. vica&apos;s agents run with your own accounts at their providers, so you are also responsible for following those providers&apos; terms.</p>
      <h2>3. Authorization</h2>
      <p>Our tools act only within the OAuth permissions you grant, and only for actions you initiate or approve. You may revoke access at any time from the connected platform&apos;s settings.</p>
      <div hidden>
      <h2>4. Paid subscriptions</h2>
      <p>Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.</p>
      <ul>
        <li>The vica relay subscription costs US$4.99 per month or US$39.99 per year plus applicable taxes and renews each period until you cancel.</li>
        <li>Paying issues a subscription key. Anyone with the key can use the subscription, so do not share or resell it.</li>
        <li>You can cancel any time; the key works until the end of the paid period. Refunds follow our {refund("Refund Policy")}.</li>
        <li>We will announce a price change on this website and in vica at least 30 days in advance; it applies from the next billing period.</li>
        <li>We may suspend a key used to overload the relay server or for unlawful purposes.</li>
      </ul>
      </div>
      <h2>4. Open-source software</h2>
      <p>Some of our products, such as voin and vibe, are open source and are distributed under their own licenses (for example, the MIT License). Your use of that software is governed by the license included in its repository.</p>
      <h2>5. Availability and disclaimer</h2>
      <p>Our services and software are provided &quot;as is&quot;, without warranties of any kind. We are not liable for third-party platform outages, API changes, or moderation decisions.</p>
      <h2>6. Changes</h2>
      <p>We may update these Terms from time to time. Changes take effect when posted on this page.</p>
      <h2>7. Contact</h2>
      <p>Questions about these Terms: {mail}.</p>
    </>
  );
}

export function termsMetadata(lang: Lang): Metadata {
  return { title: `${title[lang]} | Tory Labs`, alternates: alternates(lang, "/terms") };
}

export default function Terms({ lang }: { lang: Lang }) {
  return <LegalPage lang={lang} path="/terms" title={title[lang]} updated={UPDATED[lang]}>{body(lang)}</LegalPage>;
}
