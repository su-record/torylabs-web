import Relay, { relayMetadata } from "@/views/Relay";

export const metadata = relayMetadata("en");

export default function Page() {
  return <Relay lang="en" />;
}
