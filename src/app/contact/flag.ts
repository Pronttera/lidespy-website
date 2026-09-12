/** 🇮🇳 from "IN" — regional indicators, so there are no flag assets to ship. */
export const flag = (iso: string) =>
  String.fromCodePoint(...[...iso].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
