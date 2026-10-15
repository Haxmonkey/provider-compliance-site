// Healthcare segments. Each one renders on /who-we-serve/ and gets its own landing
// page at /who-we-serve/<slug>/.
export default [
  {
    slug: "physician-practices",
    orgType: "Private physician practice",
    icon: "practice",
    name: "Private Physician Practices",
    short: "Compliance structure for practices where the administrator also runs everything else.",
    lead:
      "In most private practices, compliance belongs to someone who already has a full-time job. The practice administrator handles staffing, billing, scheduling, and vendors, and HIPAA documentation is one more item on the list.",
    body: [
      "That is not a failing. It is how small organizations work. But it means risk assessments go stale, policies stay in the binder they arrived in, and nobody is quite sure whether the IT company's work covers the Security Rule.",
      "We give your practice the structure of a compliance department without the headcount: scheduled reviews, documents that stay current, and a team to call when a question comes up.",
    ],
    challenges: [
      "Limited internal compliance resources",
      "Administrators handling compliance alongside operations",
      "Reliance on an outside IT provider without clear security responsibilities",
      "Documentation falling behind clinical priorities",
      "Staff turnover that leaves training and access records incomplete",
    ],
    help: [
      "A risk assessment sized for a practice, with findings your administrator can act on",
      "Policies written around your workflows, maintained for you",
      "Clear division of responsibility between your practice, your IT provider, and us",
      "Training and access records kept current as staff change",
    ],
  },
  {
    slug: "surgical-practices",
    orgType: "Surgical practice",
    icon: "surgical",
    name: "Surgical Practices",
    short: "PHI moves through referrals, imaging, facilities, and many vendors.",
    lead:
      "Surgical practices exchange PHI with more parties than most outpatient settings: referring physicians, imaging centers, hospitals and surgery centers, anesthesia groups, device representatives, and billing services.",
    body: [
      "Each of those exchanges is a point where records can be sent to the wrong place, accessed by the wrong person, or shared without the right agreement in place. Scheduling and pre-operative communication add more channels, often including text and email.",
      "We map how PHI actually flows through your surgical workflow and help you put controls, agreements, and documentation around each step.",
    ],
    challenges: [
      "Sensitive PHI shared across referrals, imaging, and facility relationships",
      "Multiple vendors with access to patient information",
      "Complex scheduling and pre-operative communication flows",
      "Records moving between practice, hospital, and surgery center systems",
      "Inconsistent use of email and text for patient coordination",
    ],
    help: [
      "PHI flow mapping across referral and facility relationships",
      "Business Associate Agreement review for every vendor that touches PHI",
      "Communication policies that fit how surgical teams coordinate",
      "Access reviews across the systems your staff use",
    ],
  },
  {
    slug: "specialty-clinics",
    orgType: "Specialty clinic",
    icon: "specialty",
    name: "Specialty Clinics",
    short: "Workflows and information sensitivity differ by specialty. Compliance should too.",
    lead:
      "Orthopedics, cardiology, dermatology, neurology, pain management, oncology, pediatrics, and behavioral health each handle patient information differently. A generic compliance program misses those differences.",
    body: [
      "Behavioral health and some pediatric records carry extra sensitivity. Oncology and cardiology rely heavily on imaging and outside results. Dermatology and orthopedics use clinical photography. Pain management has its own documentation and prescribing considerations.",
      "We start from your specialty's actual workflows and build your safeguards and documentation around them.",
    ],
    challenges: [
      "Specialty-specific records that need added protection",
      "Clinical photography and imaging stored across devices and systems",
      "Heavy exchange of outside results and referrals",
      "Patient portals and messaging used for sensitive conversations",
      "Specialty software and vendors outside the main EHR",
    ],
    help: [
      "Risk assessment that reflects your specialty's workflows",
      "Device and image-handling procedures for clinical photography",
      "Review of specialty systems and vendors outside the EHR",
      "Training scenarios that match situations your staff actually face",
    ],
  },
  {
    slug: "multi-location-groups",
    orgType: "Multi-location medical group",
    icon: "locations",
    name: "Multi-Location Medical Groups",
    short: "One standard across every location, with records to show it.",
    lead:
      "Every new location adds staff, devices, vendors, and local habits. Over time, the group's policies say one thing and each site does something slightly different.",
    body: [
      "Turnover means training records are spread across managers. Staff who float between sites keep access they no longer need. Acquired practices arrive with their own vendors and their own way of doing things.",
      "We help groups set one standard, apply it across locations, and keep a central record that shows where each location stands.",
    ],
    challenges: [
      "Inconsistent practices across locations",
      "Employee turnover and staff working across sites",
      "Cross-location system access that is rarely reviewed",
      "Vendor sprawl as locations are added or acquired",
      "Training and policies managed differently at each site",
    ],
    help: [
      "Centralized policies applied consistently across locations",
      "Location-by-location readiness tracking",
      "Access reviews for staff who work at more than one site",
      "Onboarding steps for new or acquired locations",
    ],
  },
  {
    slug: "hospitals",
    orgType: "Hospital or health system",
    icon: "hospital",
    name: "Hospitals & Larger Organizations",
    short: "Added capacity and structure alongside your internal compliance and security teams.",
    lead:
      "Larger organizations usually have compliance and security staff. What they often lack is capacity: more departments, systems, and vendors than the team can review on a regular schedule.",
    body: [
      "We work alongside your privacy officer, security team, and counsel. We do not replace them. Typical engagements include departmental risk reviews, vendor and Business Associate inventories, policy currency reviews, and evidence organization ahead of internal or external review.",
      "Our role is defined with your team at the start, so responsibilities and reporting lines are clear.",
    ],
    challenges: [
      "Many departments with different workflows and systems",
      "Large workforces and frequent role changes",
      "Complex vendor ecosystems",
      "Governance and documentation spread across teams",
      "Coordination between compliance, security, IT, and clinical leadership",
    ],
    help: [
      "Departmental and system-level risk reviews",
      "Vendor and Business Associate inventory and tracking",
      "Policy currency review across the organization",
      "Evidence organization for internal or external review",
    ],
  },
  {
    slug: "business-associates",
    orgType: "Business associate or vendor",
    icon: "vendor",
    name: "Business Associates",
    short: "For vendors that handle PHI on behalf of healthcare organizations.",
    lead:
      "Billing companies, IT and cloud providers, transcription services, and other vendors that handle PHI for covered entities have direct HIPAA obligations of their own.",
    body: [
      "Your healthcare clients increasingly ask for evidence of your safeguards before they sign or renew. They want to see your security policies, workforce procedures, incident response process, and how you manage your own subcontractors.",
      "We help business associates build and document a compliance program that holds up to client review.",
    ],
    challenges: [
      "Contractual obligations under Business Associate Agreements",
      "Client security questionnaires and due-diligence requests",
      "Workforce procedures for staff who access client PHI",
      "Incident response and client notification duties",
      "Subcontractors that also handle PHI",
    ],
    help: [
      "Risk assessment of your own environment",
      "Policies and procedures suitable for client review",
      "Subcontractor agreement and documentation review",
      "Incident response procedures aligned with your client agreements",
    ],
  },
];
