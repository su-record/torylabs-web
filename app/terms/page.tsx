import type { Metadata } from "next";
import { LegalPage } from "@/components/Chrome";

export const metadata: Metadata = { title: "Terms of Service | Tory Labs", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service">
      <p>These Terms govern your use of the website, products, and tools provided by Tory Labs. By using them, you agree to these Terms.</p>

      <h2>1. Service</h2>
      <p>Tory Labs provides on-device AI software and automation tools that help the account owner create and publish content to connected social media platforms. These tools are operated for Tory Labs&apos; own and its users&apos; content workflows.</p>

      <h2>2. Your responsibilities</h2>
      <p>You are responsible for the content you create and publish, and for complying with the terms of each platform you connect. You retain ownership of your content.</p>

      <h2>3. Authorization</h2>
      <p>Our tools act only within the OAuth permissions you grant, and only for actions you initiate or approve. You may revoke access at any time from the connected platform&apos;s settings.</p>

      <h2>4. Open-source software</h2>
      <p>Some of our products, such as voin and vibe, are open source and are distributed under their own licenses (for example, the MIT License). Your use of that software is governed by the license included in its repository.</p>

      <h2>5. Availability and disclaimer</h2>
      <p>Our services and software are provided &quot;as is&quot;, without warranties of any kind. We are not liable for third-party platform outages, API changes, or moderation decisions.</p>

      <h2>6. Changes</h2>
      <p>We may update these Terms from time to time. Changes take effect when posted on this page.</p>

      <h2>7. Contact</h2>
      <p>Questions about these Terms: <a href="mailto:su@torylabs.dev">su@torylabs.dev</a>.</p>
    </LegalPage>
  );
}
