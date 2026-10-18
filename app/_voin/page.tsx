import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/Chrome";

// Facts sourced from github.com/su-record/voin README and v0.1.0 release notes.
const RELEASES = "https://github.com/su-record/voin/releases/latest";
const REPO = "https://github.com/su-record/voin";

export const metadata: Metadata = {
  title: "voin | On-device meeting notes and dictation for Mac | Tory Labs",
  description:
    "voin is a free, open-source Mac app that transcribes your mic and Zoom/Teams audio on-device, separates speakers, and saves Markdown meeting notes with summaries.",
  alternates: { canonical: "/voin" },
  openGraph: { title: "voin by Tory Labs", url: "/voin", description: "Free, open-source on-device meeting notes and dictation for Mac." },
};

const features = [
  { t: "On-device transcription", d: "Transcribes your microphone in real time on your Mac. Choose from free local speech models such as Nemotron, Qwen3-ASR and Whisper." },
  { t: "Zoom & Teams audio", d: "Captures system audio from video calls alongside your mic, so both sides of the meeting are recorded." },
  { t: "Speaker diarization", d: "After recording, voin works out who spoke when and rewrites the notes by speaker. Name speakers from participant cards." },
  { t: "Markdown meeting notes", d: "Saves notes as Markdown to a folder or an Obsidian vault, with properties, daily-note links and optional team-folder sharing." },
  { t: "Built-in free summary models", d: "Summaries with key points, decisions, action items and open questions, using free local models: Mi:dm 2.0 Mini, Qwen3.5 9B, Gemma 4 E4B and Gemma 4 12B. Gemma 4 E4B is recommended for 16GB Macs." },
  { t: "Multilingual meetings", d: "Automatic language detection keeps foreign-language speech as spoken, with an optional Korean translation under each foreign-language line, generated on your Mac." },
  { t: "Voice commands to coding agents", d: "Speak a task and voin sends it to Codex or Claude Code in your project folder, with approve/deny cards and spoken replies." },
  { t: "Open source", d: "Free and open source under the MIT License. Read the code, build it yourself, or contribute." },
];

export default function Voin() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24 sm:py-28">
          <p className="text-sm font-medium text-[var(--accent)]">macOS · Free · Open source</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">voin</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed">Meeting notes and dictation for Mac that run on your own device.</p>
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted)]">voin transcribes your mic and video-call audio, separates speakers, and saves Markdown notes with summaries. It also lets you hand tasks to coding agents by voice.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={RELEASES} className="rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">Download for macOS</a>
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[var(--line)] px-5 py-3 text-sm font-medium">View on GitHub</a>
          </div>
          <p className="mt-4 text-xs text-[var(--muted)]">Apple Silicon Mac, macOS 14.4 or later.</p>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">Features</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.t} className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-6">
                <h3 className="font-semibold">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">Privacy</h2>
          <div className="max-w-3xl space-y-3 leading-relaxed text-[var(--muted)]">
            <p>Transcription and speaker diarization run entirely on your Mac. Your audio and transcripts are not sent to our servers.</p>
            <p>Summaries also stay on your Mac when you use the built-in models or Ollama. If you choose a cloud provider instead (such as Anthropic, OpenAI or another API), the transcript is sent to that provider under its own terms.</p>
            <p>See our <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>.</p>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">Requirements & install</h2>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-[var(--muted)]">
            <li>Apple Silicon Mac, macOS 14.4 or later.</li>
            <li>Download <code>voin-0.1.0.dmg</code> (about 98MB). The speech model (about 751MB) downloads automatically on first launch.</li>
            <li>The app is not signed with an Apple Developer ID. On first launch, Control-click voin and choose Open, or click &quot;Open Anyway&quot; in System Settings → Privacy &amp; Security.</li>
            <li>Allow microphone access, and screen &amp; system audio recording to capture video-call audio.</li>
          </ul>
          <a href={RELEASES} className="mt-8 inline-block rounded-lg bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]">Download for macOS</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
