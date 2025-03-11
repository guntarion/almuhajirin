// src/app/(DashboardLayout)/ide-inovasi/idea-clustering/types.ts

/**
 * Defines the structure of a processed innovation for clustering visualization
 */
export interface ProcessedInnovation {
  id: string;
  title: string;
  originator: string;
  position: string;
  problem: string;
  description: string;
  financialBenefits: string;
  nonFinancialBenefits: string;
  advantages: string;
  createdAt: Date;

  // Derived properties for clustering
  technologyDomain: string;
  businessImpact: string;
  implementationComplexity: string;
  innovationType: string;
  strategicAlignment: string;
}

/**
 * Props for the TechnologyClusterView component
 */
export interface TechnologyClusterViewProps {
  innovations: ProcessedInnovation[];
}

/**
 * Props for the BusinessImpactView component
 */
export interface BusinessImpactViewProps {
  innovations: ProcessedInnovation[];
}

/**
 * Props for the ImplementationStatusView component
 */
export interface ImplementationStatusViewProps {
  innovations: ProcessedInnovation[];
}

/**
 * Props for the AIAnalysisPanel component
 */
export interface AIAnalysisPanelProps {
  activeView: string;
  innovations: ProcessedInnovation[];
}

/**
 * Props for the ClusterInsights component
 */
export interface ClusterInsightsProps {
  activeView: string;
  innovations: ProcessedInnovation[];
}

/**
 * Props for the MermaidVisualization component
 */
export interface MermaidVisualizationProps {
  innovations: ProcessedInnovation[];
}

/**
 * Props for the HierarchyView component
 */
export interface HierarchyViewProps {
  innovations: ProcessedInnovation[];
}
