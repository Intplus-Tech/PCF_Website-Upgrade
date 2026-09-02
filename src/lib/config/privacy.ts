// Privacy policy content. Edit here — the modal renders whatever is in this file.

export type PolicySection = {
  heading: string;
  intro?: string;
  bullets?: string[];
  outro?: string;
};

export const privacyIntro =
  "Peoples Church Falkirk (\u201cthe Church\u201d) holds and processes personal data about individuals for the purpose of general administration, pastoral care, ministry operations, and communication across all aspects of our work. We are committed to complying with UK Data Protection Law (GDPR) and respecting the rights of individuals under it. This policy explains how we collect, use, store, and protect your personal information.";

export const privacySections: PolicySection[] = [
  {
    heading: "1. Information We Collect",
    intro: "We may collect and process the following categories of personal information:",
    bullets: [
      "Contact details such as name, address, telephone number, and email address.",
      "Information provided for a specific purpose, such as volunteering, staff roles, ministry involvement, event registration, safeguarding checks (e.g., PVG), or giving records.",
      "Information collected during church activities, including attendance, pastoral care notes, or participation in groups.",
      "Website usage information, including cookies, analytics data, and information submitted through online forms.",
      "Correspondence, including emails, letters, or messages sent to us.",
    ],
    outro: "We only collect information that is necessary for church purposes and ministry operations.",
  },
  {
    heading: "2. How We Use Your Information",
    intro: "Your personal information may be used for the following purposes:",
    bullets: [
      "Day to day administration of the church and its ministries.",
      "Pastoral care, follow up, and spiritual support.",
      "Communication, including contacting you about relevant activities, events, rotas, or updates.",
      "Event and conference registration.",
      "Maintaining financial records, including giving and Gift Aid (where applicable).",
      "Safeguarding requirements, including PVG checks.",
      "Improving our website and digital services, based on usage data and feedback.",
      "Sending periodic emails, or ministry updates (with the option to unsubscribe at any time).",
    ],
    outro: "We will not use your personal information for any purpose other than those stated above unless we have your consent or are required by law.",
  },
  {
    heading: "3. Legal Basis for Processing",
    intro: "We process personal data under one or more of the following lawful bases:",
    bullets: [
      "Consent \u2014 when you give permission for specific processing (e.g., mailing lists, photos).",
      "Legitimate interest \u2014 for essential church administration and communication.",
      "Legal obligation \u2014 e.g., safeguarding, HMRC requirements.",
      "Contract \u2014 where processing is necessary for a service you have requested.",
    ],
  },
  {
    heading: "4. Confidentiality & Disclosure",
    intro: "All personal information held by Peoples Church Falkirk is treated as private and confidential. We will not disclose your information to any other organisation or individual unless:",
    bullets: [
      "We are legally compelled to do so (e.g., HMRC, Disclosure Scotland).",
      "There is a public duty to disclose.",
      "Disclosure is necessary to protect your vital interests.",
      "You have given explicit consent for the information to be shared.",
    ],
    outro: "We never sell, trade, or distribute personal data for marketing purposes.",
  },
  {
    heading: "5. Your Rights",
    intro: "Under GDPR, you have the following rights:",
    bullets: [
      "Right to access \u2014 request a copy of the personal information we hold about you.",
      "Right to rectification \u2014 request corrections to inaccurate or outdated information.",
      "Right to erasure \u2014 request deletion of your personal data where appropriate.",
      "Right to restrict processing \u2014 limit how your data is used.",
      "Right to withdraw consent \u2014 at any time, for any processing based on consent.",
      "Right to data portability \u2014 request your data in a transferable format (where applicable).",
    ],
    outro: "Requests should be made in writing to: Peoples Church Falkirk, West Bridge Street, Falkirk FK1 5RJ, or emailed to office@pcfministries.org. We aim to respond within 30 days, unless there is a valid reason for delay.",
  },
  {
    heading: "6. How We Protect Your Information",
    intro: "We are committed to ensuring your information is secure. Measures include:",
    bullets: [
      "Secure, lockable storage for paper records.",
      "Password protected and encrypted digital files.",
      "Restricted access to personal data for authorised staff and volunteers only.",
      "Secure transmission methods to prevent interception.",
      "Regular review and safe disposal of outdated or unused information.",
    ],
    outro: "However, please note that the internet is not always a secure method of transmission, and we cannot guarantee security for information sent to us online.",
  },
  {
    heading: "7. Data Retention",
    intro: "We only keep personal information for as long as necessary for church purposes or as required by law. Outdated or unused information is securely deleted or destroyed, and records of disposal are maintained.",
  },
  {
    heading: "8. Cookies & Website Tracking",
    intro: "Our website may use cookies to:",
    bullets: [
      "Improve user experience.",
      "Track website usage and analytics.",
      "Personalise content.",
    ],
    outro: "Cookies do not identify you personally. You may disable cookies in your browser settings, but some website features may not function correctly.",
  },
  {
    heading: "9. Photographs, Media & Online Content",
    intro: "We may take photographs or video recordings during church services and events for ministry communication and promotional purposes. We ensure that all photographs, videos and other media are appropriately reviewed, approved and vetted before publication, with consent obtained where required. You may withdraw consent for media use at any time by contacting the church office.",
  },
  {
    heading: "10. Links to Other Websites",
    intro: "Our website may contain links to external sites. We are not responsible for the privacy practices or content of those websites. You should review their privacy policies separately.",
  },
  {
    heading: "11. Changes to This Privacy Policy",
    intro: "Peoples Church Falkirk may update this Privacy Policy periodically. The latest version will always be available on our website. We encourage you to check for updates from time to time.",
  },
  {
    heading: "12. Contacting Us",
    intro: "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your information, please contact us:",
    bullets: [
      "Telephone: +44 (0) 1324 633100",
      "Email: office@pcfministries.org",
      "Address: Peoples Church Falkirk, West Bridge Street, Falkirk, FK1 5RJ",
    ],
  },
];
