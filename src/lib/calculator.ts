/**
 * Campaign budget model. Prices live in `src/data/campaign-pricing.json` —
 * edit that file to change a campaign type or its price per lead; the
 * calculator picks the list up from there.
 */
import PRICING from "@/data/campaign-pricing.json";

/** Price per lead, keyed by campaign type. */
export const CPL: Record<string, number> = Object.fromEntries(
  PRICING.map((p) => [p.campaignType, p.pricePerLead]),
);

export type CampaignType = string;
export const CAMPAIGN_TYPES: CampaignType[] = PRICING.map((p) => p.campaignType);

export const REGIONS = [
  "North America",
  "Europe",
  "APAC",
  "Middle East",
  "Global",
] as const;

export type Region = (typeof REGIONS)[number];

/** Average deal size, used for the pipeline figure. */
export const INDUSTRY = {
  Technology: 28000,
  SaaS: 24000,
  Cybersecurity: 45000,
  FinTech: 40000,
  Healthcare: 38000,
  Manufacturing: 32000,
  Telecom: 42000,
  "Professional Services": 22000,
  Other: 25000,
} as const satisfies Record<string, number>;

export type Industry = keyof typeof INDUSTRY;
export const INDUSTRIES = Object.keys(INDUSTRY) as Industry[];

/** Employee count of the target company. */
export const SIZES = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "501–1,000",
  "1,001–5,000",
  "5,000+",
] as const;

/** [label, upper bound, open-ended] — the budget is priced on the upper bound. */
export const LEADS = [
  ["25–50", 50, false],
  ["51–100", 100, false],
  ["101–250", 250, false],
  ["251–500", 500, false],
  ["500+ leads", 500, true],
] as const;

/** Share of leads that turn into opportunities. */
const OPP_RATE = 0.14;

export type CalculatorState = {
  region: Region;
  industry: Industry;
  /** index into SIZES */
  size: number;
  type: CampaignType;
  /** index into LEADS */
  lead: number;
};

export const INITIAL_STATE: CalculatorState = {
  region: "North America",
  industry: "Technology",
  size: 3,
  type: CAMPAIGN_TYPES[0],
  lead: 2,
};

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

export type Estimate = {
  budget: string;
  budgetNote: string;
  cpl: string;
  leadVolume: string;
  pipeline: string;
  channels: string[];
  shareText: string;
  /** The raw figures behind the strings, for the count-up and the ratio bar. */
  values: {
    budget: number;
    cpl: number;
    leads: number;
    pipeline: number;
    /** "500+" — the lead goal has no upper bound, so every figure is a floor. */
    openEnded: boolean;
  };
};

export function estimate(s: CalculatorState): Estimate {
  const cpl = CPL[s.type] ?? 0;
  const [leadLabel, leads, openEnded] = LEADS[s.lead];
  const plus = openEnded ? "+" : "";
  const budget = cpl * leads;
  const pipeline = leads * OPP_RATE * (INDUSTRY[s.industry] ?? INDUSTRY.Other);

  const channels: string[] = [s.type];
  const add = (c: string) => {
    if (!channels.includes(c)) channels.push(c);
  };
  if (s.size >= 5) add("Audience Intelligence");
  if (s.lead <= 1) add("Appointment Generation");
  if (s.lead >= 3) add("High-Intent B2B Data");
  if (s.type === "ABM") add("Audience Intelligence");

  return {
    budget: fmt(budget) + plus,
    budgetNote: `${fmt(cpl)} per lead × ${leads.toLocaleString("en-US")}${plus} leads`,
    cpl: fmt(cpl),
    leadVolume: leads.toLocaleString("en-US") + plus,
    pipeline: fmt(pipeline) + plus,
    channels,
    shareText:
      `Lidespy campaign estimate — ${s.region}, ${s.industry}, ` +
      `${SIZES[s.size]} employees: ${fmt(budget)}${plus} for ${leadLabel} ` +
      `via ${s.type}.`,
    values: { budget, cpl, leads, pipeline, openEnded },
  };
}
