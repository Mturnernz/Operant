export interface AuditState {
  industry: string;
  teamSize: string;
  primaryBottleneck: string;
  weeklyHoursWasted: number;
  currentTools: string[];
  techMaturity: 'rudimentary' | 'moderate' | 'advanced';
}

export interface AuditRecommendation {
  score: number;
  readinessLabel: string;
  summary: string;
  projectedHoursSavedWeekly: number;
  annualValueEstimate: number;
  prioritySteps: {
    title: string;
    description: string;
    timeframe: string;
    impact: 'High' | 'Transformative' | 'Quick Win';
  }[];
  customAppsNeeded: {
    name: string;
    purpose: string;
    replaces: string;
  }[];
}

export interface RoiInputs {
  teamSize: number;
  avgHourlyWage: number;
  weeklyHoursPerPerson: number;
  automationCoverage: number; // percentage, e.g. 70
  investmentTier: 'pilot' | 'full' | 'enterprise';
}

export interface CaseStudy {
  id: string;
  clientTitle: string;
  industry: string;
  location: string;
  challenge: string;
  solutionEngine: string;
  customAppBuilt: string;
  hiccupHandled: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface LeadItem {
  id: string;
  sender: string;
  company: string;
  timestamp: string;
  rawInquiry: string;
  status: 'new' | 'analyzing' | 'processed' | 'synced';
  priority?: 'High' | 'Medium' | 'Low';
  dealSizeEst?: string;
  extractedNeeds?: string[];
  draftResponse?: string;
}

export interface SentryEvent {
  id: string;
  timestamp: string;
  source: string;
  eventType: string;
  status: 'healthy' | 'hiccup' | 'auto-resolved' | 'human-triaged';
  detail: string;
  resolutionNote?: string;
}
