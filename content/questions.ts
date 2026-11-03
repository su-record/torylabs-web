import { company } from "./company";
import type { Lang } from "./i18n";
import { voinText } from "./voin";
import type { Question } from "@/components/StructuredData";

export const faqTitles: Record<Lang, string> = { en: "Questions", ja: "よくある質問", ko: "자주 묻는 질문" };
export const homeQuestions: Record<Lang, Question[]> = {
  en: [
    ["What does Tory Labs build?", "Tory Labs builds vica for coordinating AI coding agents, voin for local transcription and meeting notes, and vibe for verifying development work."],
    ["How are vica and voin different?", "vica hands coding tasks to the agents on your Mac. voin transcribes audio, separates speakers and saves meeting notes as Markdown. Both apps are free; agent accounts and optional external services have their own terms."],
    ["Does every feature run offline?", "No. voin transcription and speaker separation run locally after the models are downloaded. vica uses the coding agents you connect, which send code and prompts to their providers. voin can also send records to an external AI service if you select one for summaries."],
    ["How can I contact Tory Labs?", `Email ${company.email} for product questions, partnerships or collaboration.`],
  ],
  ko: [
    ["토리랩스는 무엇을 만드나요?", "토리랩스(Tory Labs)는 AI 코딩 에이전트를 연결하는 vica, 로컬 받아쓰기와 회의록 앱 voin, 개발 작업을 검증하는 도구 vibe를 만듭니다."],
    ["vica와 voin은 어떻게 다른가요?", "vica는 Mac의 AI 코딩 에이전트들에게 개발 작업을 맡기는 앱입니다. voin은 음성을 받아쓰고 화자를 구분해 Markdown 회의록으로 남기는 앱입니다. 두 앱은 무료이며, 에이전트 계정과 선택한 외부 서비스에는 각 제공사의 이용 조건이 적용됩니다."],
    ["모든 기능을 인터넷 없이 쓸 수 있나요?", "아닙니다. voin의 받아쓰기와 화자 분리는 모델을 내려받은 뒤 로컬에서 실행됩니다. vica는 연결한 코딩 에이전트를 사용하며 코드와 프롬프트가 해당 제공사로 전송됩니다. voin도 요약에 외부 AI 서비스를 선택하면 기록 내용이 그 서비스로 전송됩니다."],
    ["토리랩스에 어떻게 문의하나요?", `제품 문의, 제휴, 협업은 ${company.email}로 보내 주세요.`],
  ],
  ja: [
    ["Tory Labsは何を作っていますか？", "Tory Labsは、AIコーディングエージェントを連携するvica、ローカルで文字起こしと会議の記録を行うvoin、開発作業を検証するvibeを作っています。"],
    ["vicaとvoinの違いは何ですか？", "vicaはMacのAIコーディングエージェントに開発作業を任せるアプリです。voinは音声を文字に起こし、話者を分け、Markdownで会議の記録を保存します。両アプリは無料ですが、エージェントのアカウントや外部サービスには各提供元の利用条件が適用されます。"],
    ["すべての機能をオフラインで使えますか？", "いいえ。voinの文字起こしと話者分離は、モデルをダウンロードした後はローカルで動きます。vicaは接続したコーディングエージェントを使い、コードやプロンプトは各提供元へ送られます。voinでも要約に外部AIサービスを選ぶと、記録がそのサービスに送られます。"],
    ["Tory Labsへの問い合わせ方法は？", `製品に関する質問、提携、協業のご相談は${company.email}へお送りください。`],
  ],
};

const voinQuestions: Record<Lang, string[]> = {
  en: ["Which computers does voin support?", "Can I transcribe audio offline?", "Are summaries processed locally?", "Where are my transcripts saved?"],
  ko: ["voin은 어떤 컴퓨터에서 쓸 수 있나요?", "인터넷 없이 받아쓸 수 있나요?", "요약도 내 컴퓨터에서 처리하나요?", "받아쓴 기록은 어디에 저장되나요?"],
  ja: ["voinはどのコンピューターで使えますか？", "オフラインで文字起こしできますか？", "要約もローカルで処理されますか？", "文字起こしの記録はどこに保存されますか？"],
};

export function voinAnswers(lang: Lang): Question[] {
  const t = voinText[lang];
  const answers = [`${t.requirements}. ${t.windows}: ${t.soon}.`, t.privacy[0], t.privacy[1], t.features[2].d];
  return voinQuestions[lang].map((question, i) => [question, answers[i]]);
}
