/**
 * Campaign budget model. Prices live in `src/data/campaign-pricing.json` —
 * edit that file to change a campaign type or its price per lead; the
 * calculator picks the list up from there. The file mirrors the Lidespy rate
 * card, where most categories are priced as a range rather than a flat CPL.
 */
import PRICING from "@/data/campaign-pricing.json";

/** The rate-card row for a campaign type, as the pricing file holds it. */
export type Rate = {
  campaignType: string;
  /** Bottom of the CPL range — the flat price when there is no range. */
  pricePerLead: number;
  /** Top of the CPL range. Equal to `pricePerLead` on flat-priced rows. */
  pricePerLeadMax: number;
  whatYouGet: string;
  /** What the same lead costs elsewhere in the market, per the rate card. */
  benchmark: string;
};

export const RATES: Rate[] = PRICING;

/** Price per lead (low end of the range), keyed by campaign type. */
export const CPL: Record<string, number> = Object.fromEntries(
  RATES.map((p) => [p.campaignType, p.pricePerLead]),
);

/** Top of the range, keyed by campaign type. */
export const CPL_MAX: Record<string, number> = Object.fromEntries(
  RATES.map((p) => [p.campaignType, p.pricePerLeadMax]),
);

export type CampaignType = string;
export const CAMPAIGN_TYPES: CampaignType[] = RATES.map((p) => p.campaignType);

export const REGIONS = [
  "North America",
  "Europe",
  "APAC",
  "Middle East",
  "Global",
] as const;

export type Region = (typeof REGIONS)[number];

export const INDUSTRIES = [
  "Technology",
  "SaaS",
  "Cybersecurity",
  "FinTech",
  "Healthcare",
  "Manufacturing",
  "Telecom",
  "Professional Services",
  "Other",
] as const;

export type Industry = (typeof INDUSTRIES)[number];

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

/** The lead goal is a free number — this is the floor it is clamped to. */
export const MIN_LEADS = 1;

export type CalculatorState = {
  region: Region;
  industry: Industry;
  /** index into SIZES */
  size: number;
  type: CampaignType;
  /** How many leads the campaign has to deliver. Always >= MIN_LEADS. */
  leads: number;
};

export const INITIAL_STATE: CalculatorState = {
  region: "North America",
  industry: "Technology",
  size: 3,
  type: CAMPAIGN_TYPES[0],
  leads: 250,
};

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
/** A range prints as one figure when both ends match. */
const fmtRange = (lo: number, hi: number) =>
  lo === hi ? fmt(lo) : `${fmt(lo)} – ${fmt(hi)}`;

export type Result = {
  budget: string;
  budgetNote: string;
  cpl: string;
  leadVolume: string;
  channels: string[];
  shareText: string;
  /** The raw figures behind the strings, for the count-up. */
  values: {
    budget: number;
    budgetMax: number;
    cpl: number;
    cplMax: number;
    leads: number;
  };
};

/**
 * The category a campaign naturally graduates into — the rate card runs from
 * raw data up to booked meetings, so the recommendation is the next rung.
 */
const NEXT_STEP: Record<string, string> = {
  "Good Fit Data": "Intent Data",
  "Intent Data": "Content Syndication",
  "Content Syndication": "MQL",
  MQL: "HQL",
  HQL: "BANT Qualified Lead",
  "BANT Qualified Lead": "Appointment Setting",
  "Appointment Setting": "BANT Qualified Lead",
};

export function calculate(s: CalculatorState): Result {
  const cpl = CPL[s.type] ?? 0;
  const cplMax = CPL_MAX[s.type] ?? cpl;
  const leads = Math.max(MIN_LEADS, Math.round(s.leads));
  const budget = cpl * leads;
  const budgetMax = cplMax * leads;

  const channels: string[] = [s.type];
  const add = (c: string) => {
    if (!channels.includes(c)) channels.push(c);
  };
  const next = NEXT_STEP[s.type];
  if (next) add(next);
  // Enterprise account lists are the case where the audience work pays off.
  if (s.size >= 5) add("Audience Intelligence");

  return {
    budget: fmtRange(budget, budgetMax),
    budgetNote: `${fmtRange(cpl, cplMax)} per lead × ${leads.toLocaleString("en-US")} leads`,
    cpl: fmtRange(cpl, cplMax),
    leadVolume: leads.toLocaleString("en-US"),
    channels,
    shareText:
      `Lidespy campaign plan — ${s.region}, ${s.industry}, ` +
      `${SIZES[s.size]} employees: ${fmtRange(budget, budgetMax)} for ` +
      `${leads.toLocaleString("en-US")} leads via ${s.type}.`,
    values: { budget, budgetMax, cpl, cplMax, leads },
  };
}
