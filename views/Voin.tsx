import { pageMetadata } from "@/content/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/Chrome";
import { localized, type Lang } from "@/content/i18n";
import { voinText } from "@/content/voin";
import release from "@/content/voin-release.json";
import { PageSchema, softwareEntity } from "@/components/StructuredData";
import Questions from "@/components/Questions";
import { faqTitles, voinAnswers } from "@/content/questions";

export function voinMetadata(lang: Lang): Metadata {
  const { title, description } = voinText[lang];
  return pageMetadata(lang, "/voin", title, description);
}

function Downloads({ lang }: { lang: Lang }) {
  const t = voinText[lang];
  const primary = "inline-flex items-center justify-center rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#34303e]";
  const secondary = "inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-medium";
  return <div className="flex flex-wrap gap-3">
    {release.download ? <a href={release.download} className={primary}>{t.download} <span className="ml-2 opacity-60">↓</span></a>
      : <span className={`${primary} opacity-50`} aria-disabled="true">{t.preparing}</span>}
    {release.github ? <a href={release.github} className={secondary} target="_blank" rel="noopener noreferrer">{t.github} ↗</a>
      : <span className={`${secondary} text-[var(--muted)]`} aria-disabled="true">{t.githubPending}</span>}
  </div>;
}

export default function Voin({ lang }: { lang: Lang }) {
  const t = voinText[lang];
  const questions = voinAnswers(lang);
  const software = softwareEntity({ name: "voin", lang, description: t.description,
    features: t.features.map((f) => f.t), download: release.download, version: release.version, requirements: t.requirements });
  return <>
    <PageSchema lang={lang} path="/voin" title={t.title} description={t.description} questions={questions} entities={[software]} mainEntity={software["@id"]} />
    <Header lang={lang} path="/voin" />
    <main lang={lang} className="mx-auto max-w-6xl overflow-x-clip px-6">
      <section className="grid items-center gap-14 pt-24 pb-20 lg:grid-cols-[1fr_1fr] lg:pt-32 lg:pb-28">
        <div>
          <p className="font-mono text-xs tracking-[.16em] text-[var(--accent)]">voin / {t.eyebrow}</p>
          <h1 className="mt-6 whitespace-pre-line text-[clamp(38px,5vw,64px)] font-semibold leading-[1.2] tracking-[-.045em]">{t.lead}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">{t.intro}</p>
          <div className="mt-9"><Downloads lang={lang} /></div>
          <p className="mt-4 text-xs text-[var(--muted)]">v{release.version} · {t.price} · {t.requirements}</p>
          <p className="mt-2 text-xs text-[var(--muted)]">Windows · {t.soon}</p>
        </div>
        <figure className="min-w-0">
          <div className="rounded-[32px] border border-[#e9e0ed] bg-[#f0e9f2] p-4 shadow-[0_28px_70px_-36px_rgba(90,54,113,.35)] sm:p-7">
            <Image src={`/images/voin-transcription-${lang}.png`} width={520} height={420} alt={t.imageAlt} priority unoptimized className="h-auto w-full rounded-[22px] shadow-[0_10px_40px_-16px_rgba(55,40,70,.25)]" />
          </div>
          <figcaption className="mt-4 text-center text-xs text-[var(--muted)]">{t.screenshot}</figcaption>
        </figure>
      </section>

      <section className="border-t border-[var(--line)] py-20">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight">{t.featuresTitle}</h2>
        <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((feature, i) => <article key={feature.t}>
            <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
            <h3 className="mt-3 font-semibold">{feature.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{feature.d}</p>
          </article>)}
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-20">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight">{t.startTitle}</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {t.steps.map((step, i) => <li key={step.t} className="surface rounded-2xl p-6">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f0ecfc] text-sm text-[var(--accent)]">{i + 1}</span>
            <h3 className="mt-5 font-semibold">{step.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.d}</p>
          </li>)}
        </ol>
      </section>

      <section className="border-t border-[var(--line)] py-20 md:grid md:grid-cols-[1fr_1.4fr] md:gap-14">
        <h2 className="text-3xl font-semibold leading-snug tracking-tight">{t.privacyTitle}</h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--muted)] md:mt-0">
          {t.privacy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="flex flex-wrap gap-5 pt-2 text-[var(--accent)]">
            <Link className="underline underline-offset-4" href={localized(lang, "/relay")}>{t.guide} ↗</Link>
            <Link className="underline underline-offset-4" href={localized(lang, "/privacy")}>{t.privacyLink}</Link>
          </div>
        </div>
      </section>

      <Questions title={faqTitles[lang]} items={questions} />

      <section id="download" className="border-t border-[var(--line)] py-20">
        <h2 className="text-3xl font-semibold tracking-tight">{t.installTitle}</h2>
        <p className="mt-3 text-sm text-[var(--muted)]">v{release.version} · {t.price} · {t.requirements}</p>
        <ol className="mt-7 max-w-2xl list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[var(--muted)]">
          {t.install.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">{t.update}</p>
        <div className="mt-8"><Downloads lang={lang} /></div>
        <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[var(--line)] px-4 py-3 text-sm">
          <span>{t.windows}</span><span className="rounded-full bg-[#f0ecfc] px-2.5 py-1 text-xs text-[var(--accent)]">{t.soon}</span>
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[var(--muted)]">{t.accuracy}</p>
      </section>
    </main>
    <Footer lang={lang} />
  </>;
}
