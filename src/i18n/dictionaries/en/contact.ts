/** Content for the Contact artboard (`Contact.dc.html`). */

export const CONTACT = {
  meta: {
    title: "Contact · Lidespy",
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
    },
    emailPlaceholder: "you@company.com",
    interestLabel: "What are you interested in?",
    interestPlaceholder: "Select a service",
    interests: [
      "Demand Generation", "Content Syndication", "ABM", "Email Marketing",
      "Audience Intelligence", "Data", "Webinar Promotion", "Appointment Generation",
      "GTM Strategy", "Digital Marketing", "Website Development", "Other",
    ],
    goalsLabel: "Tell us about your campaign goals",
    goalsPlaceholder: "Target region, ICP, lead goal, timeline…",
    submit: "Send message",
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
