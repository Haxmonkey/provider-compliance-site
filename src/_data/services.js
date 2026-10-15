// Service catalogue. Used on the Home page (featured), the Services page, and the
// Compliance Review form ("Discuss this service" pre-selects the matching concern).
export default [
  {
    id: "risk-assessment",
    concern: "risk-assessment",
    icon: "assess",
    featured: true,
    name: "HIPAA Risk Assessment",
    short: "A structured review of your current environment that identifies gaps and ranks them by risk.",
    summary:
      "We review how your organization actually handles protected health information across people, systems, vendors, and facilities. You receive documented findings and a prioritized set of recommendations, not a generic checklist.",
    deliverables: [
      "Review of administrative, technical, and physical safeguards",
      "Workflow and access-control review",
      "Documentation and policy review",
      "Risk ratings and prioritized remediation recommendations",
    ],
  },
  {
    id: "managed-compliance",
    concern: "hipaa",
    icon: "cycle",
    featured: true,
    name: "Managed HIPAA Compliance",
    short: "Ongoing oversight that keeps your program current between annual reviews.",
    summary:
      "Most organizations do not need a full internal compliance department. We act as your outside compliance function: scheduled reviews, policy upkeep, issue tracking, and a team you can call when questions come up.",
    deliverables: [
      "Periodic compliance reviews on a set schedule",
      "Policy maintenance as operations change",
      "Compliance tracking and status reporting",
      "Issue escalation and remediation tracking",
      "Ongoing guidance for leadership and staff",
    ],
  },
  {
    id: "phi-protection",
    concern: "cyber-phi",
    icon: "record",
    featured: true,
    name: "PHI Protection & Monitoring",
    short: "Find where patient information is exposed in everyday workflows, email, and file sharing.",
    summary:
      "PHI exposure usually comes from ordinary work: a fax to the wrong number, a misfiled record, a shared folder nobody closed. We review the workflows, communications, and access patterns where PHI moves, and help you put practical controls around them.",
    deliverables: [
      "Review of record mismatch and misfiling risks",
      "Incorrect-recipient and email risk review",
      "Unauthorized access concern review",
      "Assessment of communication and file-sharing tools",
      "Workflow vulnerabilities involving PHI, with remediation steps",
    ],
  },
  {
    id: "policies",
    concern: "policies",
    icon: "policy",
    featured: true,
    name: "Policies & Procedures",
    short: "Policies written for how your organization actually works, and kept current.",
    summary:
      "Template policies that nobody follows create risk of their own. We develop, review, and maintain privacy and security policies that reflect your real workflows, and keep the revision history that shows they are maintained.",
    deliverables: [
      "Privacy and security policies",
      "Access-control procedures",
      "Incident response procedures",
      "Device, communication, retention, and vendor policies",
      "Version history and review dates",
    ],
  },
  {
    id: "vendors",
    concern: "vendor-baa",
    icon: "vendor",
    featured: true,
    name: "Business Associates & Vendors",
    short: "Know which vendors touch PHI, and keep the agreements and records to prove it.",
    summary:
      "Billing companies, IT providers, cloud services, transcription, shredding: most practices rely on many outside parties that handle PHI. We map those relationships, review Business Associate Agreements, and keep a central record.",
    deliverables: [
      "Business Associate Agreement review and tracking",
      "Vendor risk review",
      "PHI access mapping by vendor",
      "Third-party compliance documentation",
    ],
  },
  {
    id: "training",
    concern: "training",
    icon: "people",
    featured: false,
    name: "Workforce Training",
    short: "Role-appropriate HIPAA and security training, with records you can produce on request.",
    summary:
      "Staff decisions shape most privacy outcomes. We provide training that fits each role and maintain the completion records that show it happened.",
    deliverables: [
      "New-hire orientation",
      "Annual HIPAA training",
      "Security and phishing awareness",
      "Incident reporting procedures",
      "Completion records",
    ],
  },
  {
    id: "incident-response",
    concern: "incident-response",
    icon: "alert",
    featured: false,
    name: "Incident Response",
    short: "A defined process for identifying, escalating, and documenting potential incidents.",
    summary:
      "When something goes wrong, the first days matter. We help you establish an incident process, support the investigation and risk review, and track corrective action through to completion. We work alongside your IT provider and legal counsel where their roles apply.",
    deliverables: [
      "Identification and escalation procedures",
      "Investigation support and documentation",
      "Risk review and corrective action planning",
      "Post-incident remediation tracking",
    ],
  },
  {
    id: "audit-readiness",
    concern: "audit-readiness",
    icon: "binder",
    featured: true,
    name: "Audit Readiness",
    short: "Organized, current evidence that your compliance activities actually take place.",
    summary:
      "If a regulator, payer, or partner asked for your compliance documentation, could you produce it? We organize your evidence, confirm it is current, and identify what is missing before anyone asks.",
    deliverables: [
      "Organized evidence and records",
      "Review of policy currency",
      "Confirmation of risk-management documentation",
      "Verification of training and vendor records",
    ],
  },
];
