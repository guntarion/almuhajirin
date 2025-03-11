// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/data/types.ts
/**
 * Type definitions for innovation dissemination platform
 * Contains interfaces for innovations, innovators, adoption metrics, and related entities
 */

export interface Innovator {
  id: string;
  name: string;
  position: string;
  unit: string;
  email: string;
  phone?: string;
  bio: string;
  profileImage: string;
}

export interface AdoptingUnit {
  id: string;
  name: string;
  implementationDate: string;
  status: 'planning' | 'implementing' | 'completed';
  testimonial?: string;
  contactPerson?: string;
}

export interface Award {
  title: string;
  year: string;
  level: 'unit' | 'regional' | 'national' | 'international';
  description: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userUnit: string;
  userRole: string;
  content: string;
  timestamp: string;
  replies?: Comment[];
}

export interface AdoptionInquiry {
  id: string;
  unitId: string;
  unitName: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  inquiryType: 'information' | 'implementation' | 'collaboration';
  message: string;
  status: 'pending' | 'responded' | 'closed';
  timestamp: string;
}

export interface ReadinessMetrics {
  technicalComplexity: 1 | 2 | 3 | 4 | 5; // 1=low, 5=high
  implementationTime: 1 | 2 | 3 | 4 | 5; // 1=quick, 5=long
  resourceRequirement: 1 | 2 | 3 | 4 | 5; // 1=minimal, 5=substantial
  roi: 1 | 2 | 3 | 4 | 5; // 1=low, 5=high
  scalability: 1 | 2 | 3 | 4 | 5; // 1=highly scalable, 5=limited
}

export interface Inovasi {
  id: string;
  title: string;
  executiveSummary: string[];
  painPoints: string[];
  stakeholders: string[];
  solution: string[];
  features: string[];
  novelty: string[];
  comparativeAnalysis: string[];
  investment: {
    developmentCost: string[];
    requiredResources: string[];
    infrastructure: string[];
  };
  financialBenefits: {
    revenue: string[];
    costSaving: string[];
    roi: string[];
  };
  nonFinancialBenefits: {
    operationalEfficiency: string[];
    qualityImprovement: string[];
    safetyImprovement: string[];
    companyImage: string[];
  };
  implementation: string[];
  scalability: string[];
  category: string;
  complexity: string;
  resources: string;
  timeline: string;
  innovators: Innovator[];
  adoptingUnits: AdoptingUnit[];
  awards: Award[];
  comments: Comment[];
  inquiries: AdoptionInquiry[];
  readinessMetrics: ReadinessMetrics;
  overallRating: number;
  images: string[];
  featuredImage: string;
  videoUrl?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  highlightPoints: string[];
  applicableUnitTypes: string[];
  managerRemarks?: string;
}
