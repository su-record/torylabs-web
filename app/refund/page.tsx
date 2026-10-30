import Refund, { refundMetadata } from "@/views/Refund";

export const metadata = refundMetadata("en");

export default function Page() {
  return <Refund lang="en" />;
}
