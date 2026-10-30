import Vica, { vicaMetadata } from "@/views/Vica";

export const metadata = vicaMetadata("en");

export default function Page() {
  return <Vica lang="en" />;
}
