import type { Metadata } from "next";
import { alternates, type Lang } from "@/content/i18n";
import { LegalPage } from "@/components/Chrome";
import { company } from "@/content/company";

const UPDATED = { en: "October 30, 2026", ja: "2026年10月30日", ko: "2026년 10월 30일" };
const mail = <a href={`mailto:${company.email}`}>{company.email}</a>;
const paddle = <a href="https://paddle.net" target="_blank" rel="noopener noreferrer">paddle.net</a>;

const title = { en: "Refund Policy", ja: "返金ポリシー", ko: "환불 정책" };

const body: Record<Lang, React.ReactNode> = {
  en: (
    <>
      <p>This policy covers the vica relay subscription (US$4.99 per month or US$39.99 per year). Paddle.com, our Merchant of Record, processes payments and refunds.</p>
      <h2>14-day refund</h2>
      <p>You can get a full refund of any payment within 14 days of the charge, for any reason.</p>
      <h2>How to ask</h2>
      <ul>
        <li>Reply to your Paddle receipt, or find your order at {paddle}; or</li>
        <li>Email {mail} with the email you paid with and the transaction ID on the receipt (txn_…).</li>
      </ul>
      <p>Refunds go back to the original payment method. Your bank may take 5 to 10 business days to show it.</p>
      <h2>Cancelling</h2>
      <p>You can cancel any time from vica (Settings → General → Relay subscription → Manage · cancel) or from {paddle}. Cancelling stops future charges; your key works until the end of the paid period. A refunded payment ends the subscription and the key stops working.</p>
      <h2>Free products</h2>
      <p>The vica app, voin and vibe are free, so no refund applies.</p>
    </>
  ),
  ja: (
    <>
      <p>このポリシーは、vica 中継サブスクリプション（月額 US$4.99 または年額 US$39.99）に適用されます。支払いと返金は、当社の販売者（Merchant of Record）であるPaddle.comが処理します。</p>
      <h2>14日間の返金</h2>
      <p>請求日から14日以内であれば、理由を問わず、その支払いの全額を返金します。</p>
      <h2>申請方法</h2>
      <ul>
        <li>Paddleの領収書メールに返信するか、{paddle}で注文を探してください。または</li>
        <li>支払いに使ったメールアドレスと、領収書の取引ID（txn_…）を添えて{mail}までご連絡ください。</li>
      </ul>
      <p>返金は元の支払い方法に戻ります。反映まで銀行によって5〜10営業日かかることがあります。</p>
      <h2>解約</h2>
      <p>vica（設定 → 全般 → 中継サブスクリプション → 管理・解約）または{paddle}からいつでも解約できます。解約すると以降の請求は止まり、支払済みの期間が終わるまでキーは有効です。返金された支払いはサブスクリプションを終了し、キーは使えなくなります。</p>
      <h2>無料の製品</h2>
      <p>vicaアプリ、voin、vibeは無料のため、返金の対象はありません。</p>
    </>
  ),
  ko: (
    <>
      <p>이 정책은 vica 중계 구독(월 US$4.99 또는 연 US$39.99)에 적용됩니다. 결제와 환불은 저희 판매자(Merchant of Record)인 Paddle.com이 처리합니다.</p>
      <h2>14일 환불</h2>
      <p>청구일로부터 14일 안이면 이유와 상관없이 그 결제 전액을 환불합니다.</p>
      <h2>요청 방법</h2>
      <ul>
        <li>Paddle 영수증 메일에 답장하거나 {paddle}에서 주문을 찾으세요. 또는</li>
        <li>결제한 이메일과 영수증의 거래 번호(txn_…)를 적어 {mail}로 보내 주세요.</li>
      </ul>
      <p>환불은 원래 결제 수단으로 돌아갑니다. 은행에 따라 반영까지 영업일 5~10일이 걸릴 수 있습니다.</p>
      <h2>해지</h2>
      <p>vica(설정 → 전체 → 중계 구독 → 관리·해지)나 {paddle}에서 언제든 해지할 수 있습니다. 해지하면 다음 청구가 멈추고, 결제한 기간이 끝날 때까지 키를 쓸 수 있습니다. 환불한 결제는 구독을 끝내고, 키도 더는 쓸 수 없습니다.</p>
      <h2>무료 제품</h2>
      <p>vica 앱, voin, vibe는 무료라 환불 대상이 없습니다.</p>
    </>
  ),
};

export function refundMetadata(lang: Lang): Metadata {
  return { title: `${title[lang]} | Tory Labs`, alternates: alternates(lang, "/refund") };
}

export default function Refund({ lang }: { lang: Lang }) {
  return <LegalPage lang={lang} path="/refund" title={title[lang]} updated={UPDATED[lang]}>{body[lang]}</LegalPage>;
}
