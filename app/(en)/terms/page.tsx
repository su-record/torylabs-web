import Terms, { termsMetadata } from "@/views/Terms";

export const metadata = termsMetadata("en");

export default function Page() {
  return <Terms lang="en" />;
}
