// HIPAA Readiness Checklist (lead magnet). Shown after the request form is submitted.
export default [
  { area: "Responsibility", items: [
    ["A privacy official is formally designated", "Named in writing, with responsibilities defined."],
    ["A security official is formally designated", "May be the same person in a small organization."],
    ["Compliance responsibilities with your IT provider are written down", "Who does what for security is clear on both sides."],
  ]},
  { area: "Risk analysis & management", items: [
    ["A Security Risk Analysis was completed in the last 12 months", "Or since your last major system, location, or vendor change."],
    ["The analysis covers every system, device, location, and vendor with ePHI", "Not only the EHR."],
    ["Each significant risk has a documented decision and owner", "Fix, mitigate, or accept with reasoning."],
    ["Completed remediation is recorded with dates", "Fixes leave evidence."],
  ]},
  { area: "Policies & procedures", items: [
    ["Privacy and security policies are adopted and dated", "With revision history kept."],
    ["Policies were reviewed against actual workflows in the last year", "What policy says matches what staff do."],
    ["Superseded policies are retained for six years", "Old versions are kept, not discarded."],
    ["A sanctions policy exists and is applied consistently", ""],
  ]},
  { area: "Workforce", items: [
    ["Every workforce member has completed HIPAA training", "Including new hires, temps, and volunteers."],
    ["Training records show names, dates, and content", "Kept in one place."],
    ["Security and phishing awareness is part of training", ""],
    ["Staff know how to report a potential incident", "And who to report it to."],
  ]},
  { area: "Access", items: [
    ["Every user has a unique account; no shared logins", ""],
    ["Access is based on role and reviewed periodically", "With the review documented."],
    ["Departing staff lose access promptly", "Same day where possible."],
    ["Multi-factor authentication is used for email and remote access", ""],
  ]},
  { area: "Vendors & business associates", items: [
    ["A current inventory lists every vendor with PHI access", ""],
    ["Each business associate has a signed BAA on file", "Stored centrally."],
    ["New vendors are reviewed before they receive PHI", ""],
  ]},
  { area: "Communication & devices", items: [
    ["Approved tools are defined for email, texting, and file sharing", ""],
    ["Laptops and mobile devices with PHI are managed and encrypted", ""],
    ["Paper records and media are disposed of securely", "With disposal documented."],
  ]},
  { area: "Incidents & contingency", items: [
    ["A written incident response procedure exists", ""],
    ["An incident log is maintained, including non-breach events", ""],
    ["Breach risk assessments are documented", "Using the four required factors."],
    ["Backups are tested and kept separate from the main network", ""],
    ["A contingency plan covers operating during a system outage", ""],
  ]},
];
