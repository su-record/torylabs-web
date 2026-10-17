import type { Metadata } from "next";
import { LegalPage } from "@/components/Chrome";

export const metadata: Metadata = { title: "Privacy Policy | Tory Labs", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This Privacy Policy explains how Tory Labs (&quot;we&quot;, &quot;us&quot;) handles information across our website, our products, and our content automation tools.</p>

      <h2>This website</h2>
      <p>torylabs.dev does not collect personal data. It uses no cookies, no analytics, and no tracking. If you email us, we use your message and address only to reply.</p>

      <h2>Our products</h2>
      <p>Our products are designed to run on your own device whenever possible.</p>
      <ul>
        <li><strong>voin</strong> processes audio, transcription, and meeting notes locally on your computer. It does not send your audio or transcripts to our servers. If you choose to enable an optional third-party service or model, that provider&apos;s terms and privacy policy apply to data you send to it.</li>
        <li><strong>vibe</strong> runs locally alongside the AI coding tools you already use. We do not collect your code or project data through it.</li>
        <li><strong>Tory</strong> may have its own privacy notice within the service, which applies in addition to this policy.</li>
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
      <p>For any questions about this policy, contact us at <a href="mailto:su@torylabs.dev">su@torylabs.dev</a>.</p>
    </LegalPage>
  );
}
