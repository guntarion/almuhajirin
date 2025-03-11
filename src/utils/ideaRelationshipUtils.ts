// src/utils/ideaRelationshipUtils.ts
import { IIdeInovasi } from '../models/IdeInovasi';

// Interface for graph node
export interface Node {
  id: string;
  name: string;
  description: string;
  position: string;
  group: string; // For coloring nodes by job position
  value: number; // For node size
}

// Interface for graph link (relationship)
export interface Link {
  source: string | Node;
  target: string | Node;
  value: number; // Strength of relationship
  type: RelationshipType;
}

// Interface for graph data
export interface GraphData {
  nodes: Node[];
  links: Link[];
}

// Types of relationships between ideas
export enum RelationshipType {
  SIMILAR_TECHNOLOGY = 'Similar Technology',
  SIMILAR_PROBLEM = 'Similar Problem',
  COMPLEMENTARY = 'Complementary',
  POTENTIAL_INTEGRATION = 'Potential Integration',
  DOMAIN_OVERLAP = 'Domain Overlap',
}

// Keywords for technology categories
const techCategories = {
  AI: ['AI', 'artificial intelligence', 'machine learning', 'deep learning', 'neural network', 'algorithm'],
  IoT: ['IoT', 'internet of things', 'sensor', 'connected device', 'smart device'],
  Cloud: ['cloud', 'server', 'database', 'storage', 'network', 'aws', 'azure'],
  Mobile: ['mobile', 'app', 'smartphone', 'tablet', 'android', 'ios'],
  Automation: ['automation', 'automate', 'automatic', 'robot', 'bot'],
  Data: ['data', 'analytics', 'dashboard', 'visualization', 'reporting', 'real-time', 'monitoring'],
  Drone: ['drone', 'UAV', 'aerial', 'flight'],
  RFID: ['RFID', 'radio frequency', 'tag', 'tracking', 'identification'],
  Safety: ['safety', 'security', 'protection', 'risk', 'hazard', 'incident'],
  Document: ['document', 'paper', 'form', 'report', 'file', 'digitalization', 'digitize'],
};

// Extract technologies from idea text
const extractTechnologies = (text: string): string[] => {
  const technologies: string[] = [];
  Object.entries(techCategories).forEach(([category, keywords]) => {
    const hasKeyword = keywords.some((keyword) => text.toLowerCase().includes(keyword.toLowerCase()));
    if (hasKeyword) {
      technologies.push(category);
    }
  });
  return technologies;
};

// Extract problem domains from idea text
const extractProblemDomains = (text: string): string[] => {
  const domains: string[] = [];

  // Define problem domain keywords
  const domainKeywords = {
    Survey: ['survey', 'mapping', 'topography', 'terrain'],
    Finance: ['finance', 'cost', 'budget', 'expense', 'savings', 'financial'],
    Safety: ['safety', 'incident', 'accident', 'hazard', 'risk'],
    Admin: ['administrative', 'document', 'paperwork', 'form', 'record'],
    Equipment: ['equipment', 'machine', 'tool', 'maintenance'],
    Project: ['project management', 'coordination', 'collaboration', 'teamwork'],
    Environment: ['environment', 'pollution', 'waste', 'sustainability'],
    Legal: ['legal', 'regulation', 'compliance', 'contract', 'law'],
    Accounting: ['accounting', 'financial', 'transaction', 'payment'],
    Logistics: ['logistics', 'delivery', 'transport', 'shipping', 'route'],
    Inventory: ['inventory', 'stock', 'warehouse', 'storage', 'supply'],
  };

  Object.entries(domainKeywords).forEach(([domain, keywords]) => {
    const hasKeyword = keywords.some((keyword) => text.toLowerCase().includes(keyword.toLowerCase()));
    if (hasKeyword) {
      domains.push(domain);
    }
  });

  return domains;
};

// Calculate similarity score between two ideas
const calculateSimilarity = (idea1: Partial<IIdeInovasi>, idea2: Partial<IIdeInovasi>): number => {
  // Extract texts to analyze
  const text1 = `${idea1.deskripsiPermasalahan} ${idea1.deskripsiIde} ${idea1.keunggulanIde}`;
  const text2 = `${idea2.deskripsiPermasalahan} ${idea2.deskripsiIde} ${idea2.keunggulanIde}`;

  // Extract technologies and problem domains
  const tech1 = extractTechnologies(text1);
  const tech2 = extractTechnologies(text2);

  const domain1 = extractProblemDomains(text1);
  const domain2 = extractProblemDomains(text2);

  // Calculate similarity based on shared technologies and domains
  const techOverlap = tech1.filter((tech) => tech2.includes(tech)).length;
  const domainOverlap = domain1.filter((domain) => domain2.includes(domain)).length;

  // Calculate job position similarity (same job = stronger relationship)
  const positionSimilarity = idea1.profilIde?.posisiJabatan === idea2.profilIde?.posisiJabatan ? 1 : 0;

  // Final similarity score (weighted combination)
  return techOverlap * 0.5 + domainOverlap * 0.3 + positionSimilarity * 0.2;
};

// Determine relationship type based on similarity analysis
const determineRelationshipType = (idea1: Partial<IIdeInovasi>, idea2: Partial<IIdeInovasi>): RelationshipType => {
  const text1 = `${idea1.deskripsiPermasalahan} ${idea1.deskripsiIde} ${idea1.keunggulanIde}`;
  const text2 = `${idea2.deskripsiPermasalahan} ${idea2.deskripsiIde} ${idea2.keunggulanIde}`;

  const tech1 = extractTechnologies(text1);
  const tech2 = extractTechnologies(text2);

  const problem1 = idea1.deskripsiPermasalahan || '';
  const problem2 = idea2.deskripsiPermasalahan || '';

  // Check for similar technologies
  if (tech1.some((tech) => tech2.includes(tech))) {
    return RelationshipType.SIMILAR_TECHNOLOGY;
  }

  // Check for similar problems
  if (problem1.toLowerCase().includes(problem2.toLowerCase()) || problem2.toLowerCase().includes(problem1.toLowerCase())) {
    return RelationshipType.SIMILAR_PROBLEM;
  }

  // Check for domain overlap
  const domain1 = extractProblemDomains(text1);
  const domain2 = extractProblemDomains(text2);

  if (domain1.some((domain) => domain2.includes(domain))) {
    return RelationshipType.DOMAIN_OVERLAP;
  }

  // Check if they might complement each other
  const complementaryPairs = [
    ['data collection', 'data analysis'],
    ['monitoring', 'reporting'],
    ['survey', 'planning'],
    ['safety', 'reporting'],
    ['cost', 'reporting'],
    ['logistics', 'inventory'],
  ];

  const complementary = complementaryPairs.some(
    ([a, b]) =>
      (text1.toLowerCase().includes(a) && text2.toLowerCase().includes(b)) || (text1.toLowerCase().includes(b) && text2.toLowerCase().includes(a))
  );

  if (complementary) {
    return RelationshipType.COMPLEMENTARY;
  }

  // Default to potential integration
  return RelationshipType.POTENTIAL_INTEGRATION;
};

// Generate nodes and relationships from idea list
export const generateGraphData = (ideaList: Partial<IIdeInovasi>[]): GraphData => {
  // Create nodes
  const nodes: Node[] = ideaList.map((idea, index) => {
    // Group nodes by job position
    const group = idea.profilIde?.posisiJabatan || 'Unknown';

    // Determine node value (size) based on idea strengths
    // More benefits = larger node
    const keunggulanCount = idea.keunggulanIde ? (idea.keunggulanIde.match(/\d+\./g) || []).length : 0;

    const manfaatCount = (idea.manfaatFinansial?.match(/\d+\./g) || []).length + (idea.manfaatNonFinansial?.match(/\d+\./g) || []).length;

    const value = 5 + keunggulanCount + manfaatCount;

    return {
      id: index.toString(),
      name: idea.profilIde?.judulIde || 'Unnamed Idea',
      description: idea.deskripsiIde || '',
      position: idea.profilIde?.posisiJabatan || 'Unknown',
      group,
      value,
    };
  });

  // Create links (relationships between ideas)
  const links: Link[] = [];

  // Compare each idea with every other idea to establish relationships
  for (let i = 0; i < ideaList.length; i++) {
    for (let j = i + 1; j < ideaList.length; j++) {
      const idea1 = ideaList[i];
      const idea2 = ideaList[j];

      const similarityScore = calculateSimilarity(idea1, idea2);

      // Only create links for ideas with some similarity
      if (similarityScore > 0.1) {
        const relationshipType = determineRelationshipType(idea1, idea2);

        links.push({
          source: i.toString(),
          target: j.toString(),
          value: similarityScore,
          type: relationshipType,
        });
      }
    }
  }

  return { nodes, links };
};

// Extend graph data with enriched information about idea relationships
export const enhanceGraphData = (graphData: GraphData): GraphData => {
  // Add more data or refine relationships as needed
  return graphData;
};
