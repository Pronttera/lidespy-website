/**
 * Campaign budget model, ported verbatim from the Claude Design artboard
 * `Calculator.dc.html`. Keep the constants and the arithmetic in sync with the
 * design — the numbers are Lidespy campaign benchmarks, not placeholders.
 */

export const CPL = {
  "Content Syndication": 65,
  ABM: 190,
  "Email Marketing": 48,
  "Webinar Promotion": 95,
  "Appointment Generation": 380,
} as const;

export type CampaignType = keyof typeof CPL;
export const CAMPAIGN_TYPES = Object.keys(CPL) as CampaignType[];

export const REGION = {
  "North America": 1.0,
  Europe: 1.1,
  APAC: 0.85,
  "Middle East": 1.0,
  Global: 1.05,
} as const;

export type Region = keyof typeof REGION;
export const REGIONS = Object.keys(REGION) as Region[];

/** [cpl multiplier, average deal size] */
export const INDUSTRY = {
  Technology: [1.0, 28000],
  SaaS: [1.0, 24000],
  Cybersecurity: [1.2, 45000],
  FinTech: [1.15, 40000],
  Healthcare: [1.2, 38000],
  Manufacturing: [0.95, 32000],
  Telecom: [1.0, 42000],
  "Professional Services": [0.9, 22000],
  Other: [1.0, 25000],
} as const satisfies Record<string, readonly [number, number]>;

export type Industry = keyof typeof INDUSTRY;
export const INDUSTRIES = Object.keys(INDUSTRY) as Industry[];

/** [label, cpl multiplier] */
export const AUD = [
  ["Under 1,000", 1.25],
  ["1,000–5,000", 1.1],
  ["5,000–20,000", 1.0],
  ["20,000+ contacts", 0.92],
] as const;

/** [label, months] */
export const DUR = [
  ["1 Month", 1],
  ["3 Months", 3],
  ["6 Months", 6],
  ["12 Months", 12],
] as const;

/** Longer campaigns earn a volume discount on CPL. */
const DUR_MULTIPLIER = [1.08, 1.0, 0.94, 0.88] as const;

/** [label, mid-point lead count] */
export const LEADS = [
  ["25–50", 38],
  ["51–100", 75],
  ["101–250", 175],
  ["251–500", 375],
  ["500+ leads", 650],
] as const;

export type CalculatorState = {
  region: Region;
  industry: Industry;
  /** index into AUD */
  aud: number;
  types: CampaignType[];
  /** index into DUR */
  dur: number;
  /** index into LEADS */
  lead: number;
};

export const INITIAL_STATE: CalculatorState = {
  region: "North America",
  industry: "Technology",
  aud: 2,
  types: ["Content Syndication", "Email Marketing"],
  dur: 1,
  lead: 2,
};

const fmt = (n: number) =>
  "$" + (Math.round(n / 100) * 100).toLocaleString("en-US");

export type Estimate = {
  budgetRange: string;
  monthlyNote: string;
  cpl: string;
  leadVolume: string;
  pipeline: string;
  channels: string[];
  shareText: string;
};

export function estimate(s: CalculatorState): Estimate {
  // Deselecting every campaign type still needs to produce a number.
  const types: CampaignType[] = s.types.length
    ? s.types
    : ["Content Syndication"];

  const baseCpl = types.reduce((a, t) => a + CPL[t], 0) / types.length;
  const ind = INDUSTRY[s.industry] ?? INDUSTRY.Other;
  const cpl =
    baseCpl * REGION[s.region] * ind[0] * AUD[s.aud][1] * DUR_MULTIPLIER[s.dur];

  const leads = LEADS[s.lead][1];
  const budget = leads * cpl;
  const months = DUR[s.dur][1];
  const pipeline = leads * 0.14 * ind[1];

  const channels: string[] = [...types];
  const add = (c: string) => {
    if (!channels.includes(c)) channels.push(c);
  };
  if (s.aud >= 3) add("Audience Intelligence");
  if (s.lead <= 1) add("Appointment Generation");
  if (s.lead >= 3) add("High-Intent B2B Data");
  if (types.includes("ABM")) add("Audience Intelligence");

  return {
    budgetRange: `${fmt(budget * 0.85)} – ${fmt(budget * 1.15)}`,
    monthlyNote: `About ${fmt(budget / months)} per month over ${DUR[
      s.dur
    ][0].toLowerCase()}`,
    cpl: `$${Math.round(cpl * 0.9)} – $${Math.round(cpl * 1.1)}`,
    leadVolume: `${Math.round(leads * 0.9)} – ${Math.round(leads * 1.1)}`,
    pipeline: `${fmt(pipeline * 0.8)} – ${fmt(pipeline * 1.2)}`,
    channels,
    shareText:
      `Lidespy campaign estimate — ${s.region}, ${s.industry}: ` +
      `${fmt(budget * 0.85)}–${fmt(budget * 1.15)} for ${LEADS[s.lead][0]} ` +
      `leads via ${types.join(", ")}.`,
  };
}
