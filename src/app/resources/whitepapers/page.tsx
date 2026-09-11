import type { Metadata } from "next";
import ResourceHubPage from "@/components/ResourceHub";
import { HUBS } from "@/i18n/dictionaries/en/resource-hubs";

export const metadata: Metadata = {
  title: HUBS.whitepapers.meta.title,
  description: HUBS.whitepapers.meta.description,
  alternates: { canonical: "/resources/whitepapers" },
};

export default function WhitepapersPage() {
  return <ResourceHubPage hubKey="whitepapers" />;
}
