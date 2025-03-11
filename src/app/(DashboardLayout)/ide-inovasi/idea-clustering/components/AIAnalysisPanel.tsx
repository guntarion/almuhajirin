// src/app/(DashboardLayout)/ide-inovasi/idea-clustering/components/AIAnalysisPanel.tsx
import React, { useMemo } from 'react';
import { AIAnalysisPanelProps, ProcessedInnovation } from '../types';

interface AnalysisContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  observations: string[];
  recommendations: string[];
}

type DomainCounts = Record<string, number>;
type ImpactLevels = Record<string, number>;
type StrategicAlignments = Record<string, number>;
type ComplexityLevels = Record<string, number>;

/**
 * Helper function to calculate distribution percentages
 */
const calculatePercentage = (count: number, total: number): number => Math.round((count / total) * 100);

/**
 * Helper function to get sorted entries from a record
 */
const getSortedEntries = <T extends Record<string, number>>(record: T): [string, number][] => Object.entries(record).sort((a, b) => b[1] - a[1]);

/**
 * AIAnalysisPanel component
 *
 * Displays AI-generated insights and analysis for the active visualization view.
 * This would typically connect to a backend AI service, but for this demo
 * we're pre-generating the analysis based on the current data and view.
 */
const AIAnalysisPanel: React.FC<AIAnalysisPanelProps> = ({ activeView, innovations }) => {
  // These would typically come from an AI service in a real application
  const analysisContent = useMemo<AnalysisContent>(() => {
    try {
      // Generate analysis based on the active view and innovation data
      switch (activeView) {
        case 'technology':
          return generateTechnologyAnalysis(innovations);
        case 'impact':
          return generateImpactAnalysis(innovations);
        case 'implementation':
          return generateImplementationAnalysis(innovations);
        default:
          return generateTechnologyAnalysis(innovations);
      }
    } catch (error) {
      console.error('Error generating analysis:', error);
      return {
        title: 'Analysis Unavailable',
        subtitle: 'An error occurred while generating the analysis',
        paragraphs: ['Unable to generate analysis at this time. Please try again later.'],
        observations: [],
        recommendations: [],
      };
    }
  }, [activeView, innovations]);

  return (
    <div className='prose prose-sm max-w-none dark:prose-invert' role='region' aria-label='AI Analysis Panel'>
      <div className='flex items-start mb-4'>
        <div className='flex-shrink-0 h-9 w-9 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3' aria-hidden='true'>
          <svg
            className='h-5 w-5 text-blue-600 dark:text-blue-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            role='img'
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
          </svg>
        </div>
        <div>
          <h2 className='text-base font-medium'>{analysisContent.title}</h2>
          <p className='text-gray-500 text-sm dark:text-gray-400'>{analysisContent.subtitle}</p>
        </div>
      </div>

      {/* Main Analysis */}
      <section aria-label='Main Analysis' className='mb-6'>
        {analysisContent.paragraphs.map((paragraph, idx) => (
          <p key={idx} className='mb-3 text-sm'>
            {paragraph}
          </p>
        ))}
      </section>

      {/* Key Observations */}
      <section aria-label='Key Observations' className='mb-6'>
        <h3 className='text-sm font-medium mb-2 border-b pb-1 border-gray-200 dark:border-gray-700'>Key Observations</h3>
        <ul className='list-disc pl-5 space-y-1' role='list'>
          {analysisContent.observations.map((observation, idx) => (
            <li key={idx} className='text-sm' role='listitem'>
              {observation}
            </li>
          ))}
        </ul>
      </section>

      {/* Recommended Actions */}
      <section aria-label='Recommended Actions'>
        <h3 className='text-sm font-medium mb-2 border-b pb-1 border-gray-200 dark:border-gray-700'>Recommended Actions</h3>
        <ul className='space-y-2' role='list'>
          {analysisContent.recommendations.map((recommendation, idx) => (
            <li key={idx} className='flex items-start' role='listitem'>
              <span
                className='inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600 text-xs font-medium mr-2 flex-shrink-0 dark:bg-blue-900 dark:text-blue-300'
                aria-hidden='true'
              >
                {idx + 1}
              </span>
              <span className='text-sm'>{recommendation}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

/**
 * Generates analysis for the Technology Domain visualization
 */
function generateTechnologyAnalysis(innovations: ProcessedInnovation[]): AnalysisContent {
  // Count innovations by technology domain
  const domains = innovations.reduce<DomainCounts>((acc, innovation) => {
    const domain = innovation.technologyDomain;
    acc[domain] = (acc[domain] || 0) + 1;
    return acc;
  }, {});

  // Find the most and least common domains
  const sortedDomains = getSortedEntries(domains);

  // Handle case when there are no domains
  if (sortedDomains.length === 0) {
    return {
      title: 'Technology Portfolio Analysis',
      subtitle: 'Based on current innovation data',
      paragraphs: ['No technology domains found in the current dataset.'],
      observations: ['No technology domains to analyze.'],
      recommendations: ['Start by adding technology domain classifications to your innovations.'],
    };
  }

  const [mostCommonDomain, mostCommonCount] = sortedDomains[0];
  const [leastCommonDomain, leastCommonCount] = sortedDomains[sortedDomains.length - 1];

  // Find the highest impact technologies
  const highImpactTechnologies = innovations
    .filter((innovation) => innovation.businessImpact === 'High Impact')
    .reduce<DomainCounts>((acc, innovation) => {
      const domain = innovation.technologyDomain;
      acc[domain] = (acc[domain] || 0) + 1;
      return acc;
    }, {});

  const topHighImpactTech = getSortedEntries(highImpactTechnologies)
    .slice(0, 2)
    .map(([tech]) => tech)
    .join(' and ');

  const mostCommonPercentage = calculatePercentage(mostCommonCount, innovations.length);

  return {
    title: 'Technology Portfolio Analysis',
    subtitle: 'Based on current innovation data',
    paragraphs: [
      `Your innovation portfolio is currently concentrated in ${sortedDomains.length} distinct technology domains, with the highest concentration in ${mostCommonDomain} (${domains[mostCommonDomain]} innovations). This suggests your organization has established capabilities in this area that could be leveraged for future initiatives.`,

      `The distribution across technology domains reveals potential opportunities for strategic focus. While ${mostCommonDomain} dominates your portfolio, there seems to be limited exploration in ${leastCommonDomain} (${domains[leastCommonDomain]} innovations), which might represent either a deliberate strategic choice or a potential gap to address.`,

      `Notably, ${topHighImpactTech} show the strongest correlation with high business impact outcomes, suggesting these technologies may deserve prioritization in your innovation investment strategy.`,
    ],
    observations: [
      `${mostCommonPercentage}% of your innovations are concentrated in ${mostCommonDomain} technologies.`,
      `You have minimal representation in ${leastCommonDomain} (${domains[leastCommonDomain]} innovations), which could represent a strategic gap.`,
      `${topHighImpactTech} technologies show the strongest business impact potential among your current initiatives.`,
      `Some technology domains show significant implementation complexity, which may require specialized resources or extended timelines.`,
    ],
    recommendations: [
      `Evaluate whether the concentration in ${mostCommonDomain} aligns with your strategic priorities or represents an over-reliance on familiar technologies.`,
      `Consider a focused exploration initiative for ${leastCommonDomain} if this domain aligns with your strategic direction.`,
      `Prioritize resources for ${topHighImpactTech} initiatives given their demonstrated business impact potential.`,
      `Develop a technology roadmap that balances investment across your portfolio, considering both immediate wins and exploratory initiatives.`,
    ],
  };
}

/**
 * Generates analysis for the Business Impact visualization
 */
function generateImpactAnalysis(innovations: ProcessedInnovation[]): AnalysisContent {
  // Count innovations by impact level
  const impactLevels = innovations.reduce<ImpactLevels>((acc, innovation) => {
    const impact = innovation.businessImpact;
    acc[impact] = (acc[impact] || 0) + 1;
    return acc;
  }, {});

  // Count innovations by strategic alignment
  const alignments = innovations.reduce<StrategicAlignments>((acc, innovation) => {
    const alignment = innovation.strategicAlignment;
    acc[alignment] = (acc[alignment] || 0) + 1;
    return acc;
  }, {});

  // Find the most common alignment
  const [mostCommonAlignment, mostCommonAlignmentCount] = getSortedEntries(alignments)[0];

  // Calculate high impact percentage
  const highImpactCount = impactLevels['High Impact'] || 0;
  const highImpactPercentage = calculatePercentage(highImpactCount, innovations.length);
  const mediumImpactPercentage = calculatePercentage(impactLevels['Medium Impact'] || 0, innovations.length);
  const mostCommonAlignmentPercentage = calculatePercentage(mostCommonAlignmentCount, innovations.length);

  return {
    title: 'Business Impact Analysis',
    subtitle: 'Strategic value assessment',
    paragraphs: [
      `Your innovation portfolio shows a ${highImpactPercentage}% concentration of high-impact initiatives, which ${
        highImpactPercentage > 40
          ? 'demonstrates a strong focus on transformative innovation'
          : 'suggests an opportunity to shift resources toward more impactful initiatives'
      }. The distribution across impact categories provides insight into your organization's innovation approach and risk appetite.`,

      `The majority of your innovations align with "${mostCommonAlignment}" as a strategic priority, indicating a clear organizational focus. This alignment is positive for consistent strategy execution, though it's worth evaluating whether this focus appropriately balances against other strategic needs.`,

      `The relationship between strategic alignment and business impact reveals patterns in how effectively different strategic priorities are being translated into high-impact innovations. This can inform both resource allocation and innovation development approaches.`,
    ],
    observations: [
      `${highImpactPercentage}% of your innovation portfolio is categorized as high-impact, ${
        highImpactPercentage > 40 ? 'suggesting a bold innovation strategy' : 'indicating potential for more ambitious initiatives'
      }.`,

      `${mostCommonAlignmentPercentage}% of innovations align with "${mostCommonAlignment}" as their primary strategic focus.`,

      `${mediumImpactPercentage}% of innovations fall in the medium-impact category, representing balanced risk-reward initiatives.`,

      `The portfolio demonstrates ${
        alignments['Sustainability'] ? 'meaningful attention to' : 'limited focus on'
      } sustainability-oriented innovations, which may be increasingly important for future competitiveness.`,
    ],
    recommendations: [
      `${
        highImpactPercentage < 30
          ? 'Increase investment in high-impact initiatives to drive more significant business outcomes.'
          : 'Maintain your balanced approach to high-impact initiatives while ensuring appropriate risk management.'
      }`,

      `Evaluate whether your strong focus on "${mostCommonAlignment}" appropriately reflects your strategic priorities or if rebalancing is needed.`,

      `Consider a formal impact assessment framework to standardize how impact potential is evaluated across initiatives.`,

      `Develop explicit connections between strategic goals and innovation outcomes to strengthen alignment throughout the innovation lifecycle.`,
    ],
  };
}

/**
 * Generates analysis for the Implementation Status visualization
 */
function generateImplementationAnalysis(innovations: ProcessedInnovation[]): AnalysisContent {
  // Count innovations by complexity
  const complexities = innovations.reduce<ComplexityLevels>((acc, innovation) => {
    const complexity = innovation.implementationComplexity;
    acc[complexity] = (acc[complexity] || 0) + 1;
    return acc;
  }, {});

  // Find high complexity domains
  const highComplexityDomains = innovations
    .filter((innovation) => innovation.implementationComplexity === 'High Complexity')
    .reduce<DomainCounts>((acc, innovation) => {
      const domain = innovation.technologyDomain;
      acc[domain] = (acc[domain] || 0) + 1;
      return acc;
    }, {});

  const topComplexDomains = getSortedEntries(highComplexityDomains)
    .slice(0, 2)
    .map(([domain]) => domain)
    .join(' and ');

  // Calculate portfolio complexity balance
  const highComplexityPercentage = calculatePercentage(complexities['High Complexity'] || 0, innovations.length);
  const lowComplexityPercentage = calculatePercentage(complexities['Low Complexity'] || 0, innovations.length);

  return {
    title: 'Implementation Complexity Analysis',
    subtitle: 'Resource planning and execution risk assessment',
    paragraphs: [
      `Your innovation portfolio demonstrates a ${
        highComplexityPercentage > lowComplexityPercentage
          ? 'tendency toward complex implementations'
          : 'balanced approach to implementation complexity'
      }, with ${highComplexityPercentage}% of initiatives classified as high complexity. This distribution has significant implications for resource allocation, timelines, and implementation risk management.`,

      `The relationship between technology domains and implementation complexity reveals that ${topComplexDomains} present the greatest implementation challenges. These areas likely require specialized skills, longer development cycles, and more robust governance to ensure successful outcomes.`,

      `The matrix visualization highlights opportunities to balance your portfolio with a mix of "quick wins" (low complexity, high impact) and strategic investments (high complexity, high impact) to maintain innovation momentum while pursuing transformative opportunities.`,
    ],
    observations: [
      `${highComplexityPercentage}% of your innovation portfolio involves high-complexity implementations, ${
        highComplexityPercentage > 50 ? 'which may strain implementation resources' : 'balanced with lower complexity initiatives'
      }.`,

      `${topComplexDomains} show the highest implementation complexity, requiring specialized capabilities and robust project management.`,

      `${
        lowComplexityPercentage < 20
          ? 'There is a notable scarcity of low-complexity initiatives'
          : `${lowComplexityPercentage}% of initiatives are low-complexity`
      }, which ${
        lowComplexityPercentage < 20 ? 'limits opportunities for quick wins and momentum building' : 'provides opportunities for near-term success'
      }.`,

      `The correlation between business impact and implementation complexity ${
        highComplexityPercentage > 60
          ? 'suggests most high-value initiatives require significant investment'
          : 'shows several high-impact, low-complexity opportunities worth prioritizing'
      }.`,
    ],
    recommendations: [
      `${
        highComplexityPercentage > 60
          ? 'Consider balancing your portfolio with more low-complexity, high-impact initiatives to achieve near-term wins while pursuing complex transformations.'
          : 'Maintain your balanced complexity distribution while ensuring appropriate resources for high-complexity initiatives.'
      }`,

      `Develop specialized implementation capabilities for ${topComplexDomains} given their prevalence and complexity in your portfolio.`,

      `Implement a phased approach for high-complexity initiatives, breaking them into manageable components with defined milestones and decision points.`,

      `Consider a formal complexity assessment framework to standardize how implementation requirements are evaluated across the innovation lifecycle.`,
    ],
  };
}

export default AIAnalysisPanel;
