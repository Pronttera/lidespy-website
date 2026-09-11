import type { Metadata } from "next";
import ResourceHubPage from "@/components/ResourceHub";
import { HUBS } from "@/i18n/dictionaries/en/resource-hubs";

export const metadata: Metadata = {
  title: HUBS.webinars.meta.title,
  description: HUBS.webinars.meta.description,
  alternates: { canonical: "/resources/webinars" },
};

export default function WebinarsPage() {
  return <ResourceHubPage hubKey="webinars" />;
}
