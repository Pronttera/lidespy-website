/**
 * One validation pass for the enquiry form. It runs as you type, so mistakes
 * surface early, and again on submit before anything is posted. The receiving
 * Apps Script re-checks what it needs, because a hand-rolled POST never went
 * near this file.
 */
import { CONTACT } from "@/i18n/dictionaries/en/contact";

const E = CONTACT.form.errors;

export const ENQUIRY_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "company",
  "interest",
  "goals",
] as const;

export type EnquiryField = (typeof ENQUIRY_FIELDS)[number];
export type EnquiryValues = Record<EnquiryField, string>;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const EMPTY_ENQUIRY: EnquiryValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  interest: "",
  goals: "",
};

/** What a message calls the field it is about. */
export const FIELD_LABELS: Record<EnquiryField, string> = {
  ...CONTACT.form.fields,
  interest: CONTACT.form.interestLabel,
  goals: CONTACT.form.goalsLabel,
};

export const MAX_LENGTHS: Record<EnquiryField, number> = {
  firstName: 80,
  lastName: 80,
  email: 160,
  company: 160,
  interest: 80,
  goals: 4000,
};

/** Everything but `goals` has to be filled in. */
const REQUIRED: readonly EnquiryField[] = ENQUIRY_FIELDS.filter(
  (f) => f !== "goals",
);

const MIN_LENGTHS: Partial<Record<EnquiryField, number>> = {
  firstName: 2,
  lastName: 2,
  company: 2,
  goals: 10,
};

/**
 * Letters from any script, then letters, spaces, and the punctuation that
 * turns up in real names and places — O’Neill, Jean-Luc, St. Louis.
 */
const NAME = /^\p{L}[\p{L}\p{M} .'’-]*$/u;
/** Company names also carry digits and a little more punctuation. */
const ORG = /^[\p{L}\p{N}][\p{L}\p{M}\p{N} .,'’&()/+-]*$/u;

const EMAIL = /^[^\s@,]+@[^\s@,.]+(\.[^\s@,.]+)*\.[A-Za-z]{2,}$/;

const PATTERNS: Partial<Record<EnquiryField, { re: RegExp; message: string }>> = {
  firstName: { re: NAME, message: E.name },
  lastName: { re: NAME, message: E.name },
  company: { re: ORG, message: E.org },
};

const fill = (template: string, vars: Record<string, string | number>) =>
  Object.entries(vars).reduce(
    (out, [k, v]) => out.replaceAll(`{${k}}`, String(v)),
    template,
  );

/**
 * The message for one field, or undefined when it is fine. Values arrive
 * untrimmed so the field can be validated on every keystroke; trimming is what
 * the rules are actually applied to.
 */
export function validateField(
  name: EnquiryField,
  values: EnquiryValues,
): string | undefined {
  const label = FIELD_LABELS[name];
  const value = values[name].trim();

  if (!value) {
    if (!REQUIRED.includes(name)) return undefined;
    // The interest label is a question ("What are you interested in?"), which
    // does not sit inside the generic sentence.
    return name === "interest"
      ? E.interestRequired
      : fill(E.required, { label });
  }

  const max = MAX_LENGTHS[name];
  if (value.length > max) return fill(E.tooLong, { label, max });

  const min = MIN_LENGTHS[name];
  if (min && value.length < min) return fill(E.tooShort, { label, min });

  if (name === "email" && !EMAIL.test(value)) return E.email;

  // The select is an allow-list: anything else reached us around the form.
  if (name === "interest" && !CONTACT.form.interests.includes(value)) {
    return E.interest;
  }

  const pattern = PATTERNS[name];
  if (pattern && !pattern.re.test(value)) return fill(pattern.message, { label });

  return undefined;
}

/** Every message the values earn, keyed by field. */
export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  for (const name of ENQUIRY_FIELDS) {
    const message = validateField(name, values);
    if (message) errors[name] = message;
  }
  return errors;
}
