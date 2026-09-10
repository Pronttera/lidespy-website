import localFont from "next/font/local";

/**
 * Satoshi Variable (Indian Type Foundry, via Fontshare). Self-hosted so the
 * whole 300–900 weight axis ships in one 42KB file with no external request.
 */
export const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});
