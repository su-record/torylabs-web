import VicaRelay, { relayMetadata } from "@/views/VicaRelay";

export const metadata = relayMetadata("en");

export default function Page() {
  return <VicaRelay lang="en" />;
}
