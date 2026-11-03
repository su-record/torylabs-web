import type { Question } from "./StructuredData";

export default function Questions({ title, items }: { title: string; items: readonly Question[] }) {
  return <section id="faq" className="scroll-mt-24 border-t border-[var(--line)] py-20">
    <h2 className="mb-10 text-3xl font-semibold tracking-tight">{title}</h2>
    <dl className="max-w-3xl space-y-8">
      {items.map(([question, answer]) => <div key={question}>
        <dt className="font-semibold">{question}</dt>
        <dd className="mt-2 leading-relaxed text-[var(--muted)]">{answer}</dd>
      </div>)}
    </dl>
  </section>;
}
