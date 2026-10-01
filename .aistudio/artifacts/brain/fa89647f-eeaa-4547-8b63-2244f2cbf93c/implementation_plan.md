# Implementation Plan: Anonymize Entity Names & Elevate Functional Operational Roles

Refining **Operant by Mike** to omit explicit corporate and agency names while retaining the full substantive impact of your real-world achievements:

---

## 1. Functional Role Descriptors Mapping

| Original Entity Name | New Substantive Functional Descriptor |
| :--- | :--- |
| **New Zealand Police (CIB)** | **Government Investigations Specialist (Volume Crime & Threat Assessment)** |
| **Gull New Zealand** | **Retail Operations Manager — Major National Fuel Supplier (80 Unmanned Sites, ~90% P&L)** |
| **Mercury Energy (Globug)** | **Operations Manager — Major Energy Gentailer (Prepay Division, RPA & Digital Transformation)** |
| **Fonterra** | **Sales Operations Manager — Global Dairy & Food Exporter (QSR Export Accounts)** |
| **NZ Defence Force (Army Reserves)** | **Military Reserve Officer / Infantry Captain (10 Years Command & Risk Management)** |
| **University of Auckland** | **Bachelor of Commerce — Operations & Supply Chain Management and Information Systems** |

---

## 2. Updated Component Architecture

### A. Navigation & Telemetry (`Navbar.tsx`)
- Moniker: `OPERANT BY MIKE`
- Telemetry badge: `GOVT INVESTIGATIONS // EX-ENERGY GENTAILER // EX-FUEL RETAIL OPS`
- Navigation: `Operational Profile`, `Architecture`, `Live Triage CRM`, `ROI Modeler`, `Blueprints`, `Engagements`

### B. Hero Section (`HeroSection.tsx`)
- Status pill: `GOVERNMENT INVESTIGATIONS // EX-RETAIL OPS (NATIONAL FUEL SUPPLIER)`
- Headline: *"Corporate Operations Scale. Investigative Precision."*
- Subtitle: *"I build custom AI automation pipelines and bespoke management CRMs for small-to-mid sized businesses—and triage operational hiccups with the rigor of a government investigator and enterprise operations leader."*
- Proof Badges (No explicit company names):
  1. `Govt Investigations`: Warrant preparation, risk assessment & evidentiary rigor
  2. `Major Fuel Supplier`: 80 unmanned retail sites, ~90% of national P&L
  3. `Energy Gentailer`: Robotic Process Automation (RPA), 75% digital adoption
  4. `Global Dairy Exporter`: Forecast-to-invoice supply chain for multinational QSRs

### C. Founder Dossier (`FounderDossier.tsx`)
- 4 Structured Pillars with substantive functional titles:
  1. **Government Investigations (Criminal & Volume Crime)**: Evidence assessment, structured judicial file preparation, threat assessment, and forensic logging without assumptions.
  2. **Major National Fuel Supplier (Retail Operations Manager)**: Autonomous physical network operations across 80 unmanned retail stations nationwide, digital receipting rollout, and Power BI pricing intelligence.
  3. **Major Energy Gentailer (Prepay Operations Manager)**: Process redesign, robotic process automation (reducing back-office headcount from 7 to 5 FTE while maintaining SLA), and Salesforce onboarding analytics reducing credit exposure.
  4. **Global Food & Dairy Exporter (Sales Operations) & Military Reserves**: Managing global supply agreements across international fast-service restaurant accounts; 10 years commanding 150-person military reserve units under pressure.

### D. System Blueprints & Mock Sandbox (`CaseStudies.tsx` & `LiveAppSandbox.tsx`)
- Blueprints framed around realistic operational scenarios (unmanned fleet automation, high-velocity trade supply, and civil compliance inspection) with no third-party branding.
- Sandbox telemetry referencing forensic verification and PostgreSQL pipeline health.

### E. Intake & Consultation System (`ConsultationBooking.tsx`, `ContactModal.tsx`, `Footer.tsx`)
- Clean calendar invite metadata citing *"Operant by Mike — 25-Min Architecture Review"*.
- Footer referencing Mike Turner's operations and investigations background in Auckland, NZ.

---

## 3. Execution & Verification Steps
1. Update `index.html` meta tags to reflect functional descriptors.
2. Refactor `Navbar.tsx`, `HeroSection.tsx`, `FounderDossier.tsx`, `CaseStudies.tsx`, `ConsultationBooking.tsx`, `ContactModal.tsx`, and `Footer.tsx`.
3. Verify compilation and TypeScript types via `compile_applet` and `lint_applet`.
