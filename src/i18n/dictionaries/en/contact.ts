/** Content for the Contact artboard (`Contact.dc.html`). */

export const CONTACT = {
  meta: {
    title: "Contact Lidespy · Book a Free Strategy Call",
    description:
      "Let's talk about your pipeline. Book a 30-minute discovery call with the Lidespy demand generation team.",
  },
  eyebrow: "Contact us",
  titleLead: "Let’s talk about",
  titleAccent: "your pipeline",
  intro:
    "Whether you’re ready to launch a campaign or just exploring options — our team is happy to have a conversation about your goals.",
  booking: {
    label: "Prefer to talk? Book a call.",
    body: "Schedule a 30-minute discovery call with our demand generation team. We’ll review your goals and share how Lidespy can help.",
    cta: "Book a discovery call",
    mailto: "mailto:info@lidespy.com?subject=Discovery%20call",
  },
  details: [
    { k: "Company", v: "Lidespy" },
    { k: "Location", v: "Pune, India" },
    { k: "Website", v: "lidespy.com" },
  ],
  emailLabel: "Email",
  form: {
    heading: "Send us a message",
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Work email",
      company: "Company name",
      title: "Job title",
      country: "Country",
      dialCode: "Country code",
      phone: "Phone number",
    },
    emailPlaceholder: "you@company.com",
    phonePlaceholder: "98765 43210",
    interestLabel: "What are you interested in?",
    interestPlaceholder: "Select a service",
    interests: [
      "Demand Generation", "Content Syndication", "ABM", "Email Marketing",
      "Audience Intelligence", "Data", "Webinar Promotion", "Appointment Generation",
      "GTM Strategy", "Digital Marketing", "Website Development", "Other",
    ],
    goalsLabel: "Campaign goals",
    goalsOptional: "Optional",
    /** `{n}` characters left in the goals box. */
    goalsCounter: "{n} characters left",
    goalsPlaceholder: "Target region, ICP, lead goal, timeline…",
    submit: "Send message",
    submitting: "Sending…",
    /**
     * Validation messages. `{label}` is the field's own label, `{min}`/`{max}`
     * the length it has to sit inside.
     */
    errors: {
      required: "{label} is required.",
      tooShort: "{label} needs at least {min} characters.",
      tooLong: "Keep {label} under {max} characters.",
      name: "{label} can only contain letters, spaces, hyphens and apostrophes.",
      org: "{label} contains characters we can’t accept.",
      email: "Enter a valid email address, like you@company.com.",
      phone: "Enter a valid phone number — digits only, 6 to 14 of them.",
      dialCode: "Choose a country code.",
      country: "Pick a country from the list.",
      interest: "Choose one of the listed services.",
      interestRequired: "Choose the service you’re interested in.",
      /** The banner above the form. `{n}` is how many fields need attention. */
      summaryOne: "One field needs your attention.",
      summaryMany: "{n} fields need your attention.",
      summaryFallback: "Please check the highlighted fields and try again.",
      /** The POST never landed — the visitor's fallback is the mailto. */
      submitFailed:
        "We couldn’t send your message. Please try again, or email info@lidespy.com directly.",
      /** No endpoint configured for this build. */
      notConfigured:
        "The form isn’t accepting messages right now. Please email info@lidespy.com and we’ll pick it up from there.",
    },
    consentLead: "By submitting this form, you agree to our",
    consentLinkLabel: "Privacy Policy",
    consentTail: ". We do not share your data with third parties.",
  },
  sent: {
    label: "Message sent",
    /** `{name}` is the first name the visitor typed, or `fallbackName`. */
    heading: "Thanks, {name}. We’ll be in touch within one business day.",
    fallbackName: "there",
    body: "In the meantime, you can estimate your campaign budget or browse recent case studies.",
    calculatorCta: "Budget calculator",
    caseStudiesCta: "Case studies",
  },
};
