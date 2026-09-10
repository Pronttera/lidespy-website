import type { Metadata } from "next";
import { satoshi } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campaign Budget Calculator · Lidespy",
  description:
    "Estimate campaign budgets, expected lead volume and pipeline potential for your next B2B demand generation campaign.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${satoshi.variable} h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
