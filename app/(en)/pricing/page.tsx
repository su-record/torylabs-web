import Pricing, { pricingMetadata } from "@/views/Pricing";

export const metadata = pricingMetadata("en");

export default function Page() {
  return <Pricing lang="en" />;
}
