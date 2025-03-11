// src/app/(DashboardLayout)/ide-inovasi/idea-clustering/components/ClusterInsights.tsx
import React, { useMemo } from 'react';
import { ClusterInsightsProps, ProcessedInnovation } from '../types';

interface Metric {
  label: string;
  value: string | number;
  color: string;
  ariaLabel?: string;
}

interface SecondaryMetric {
  label: string;
  percentage: number;
  color: string;
  ariaLabel?: string;
}

// Color constants
const COLORS = {
  blue: {
    primary: '#2563EB', // blue-600
    secondary: '#4338CA', // indigo-700
  },
  green: {
    primary: '#15803D', // green-700
    secondary: '#059669', // emerald-600
  },
  red: {
    primary: '#DC2626', // red-600
  },
  amber: {
    primary: '#D97706', // amber-600
  },
  violet: '#7C3AED', // violet-600
  gray: '#6B7280', // gray-500
} as const;

const DOMAIN_COLORS: Record<string, string> = {
  'Drone & AI': COLORS.blue.primary,
  IoT: COLORS.violet,
  'Dashboard & Analytics': COLORS.blue.primary,
  'RFID & Tracking': COLORS.amber.primary,
  'Mobile Applications': COLORS.red.primary,
  'Cloud Computing': '#0891B2',
  'ERP Systems': COLORS.green.secondary,
  'AI & Machine Learning': COLORS.violet,
  'Knowledge Management': COLORS.blue.secondary,
  'Project Management': '#0369A1',
  'Other Technologies': COLORS.gray,
};

/**
 * ClusterInsights component
 *
 * Displays key metrics and insights about the current innovation clusters
 * with accessibility improvements and performance optimizations.
 */
const ClusterInsights: React.FC<ClusterInsightsProps> = ({ activeView, innovations }) => {
  // Calculate key metrics based on the active view
  const metrics = useMemo(() => getMetricsForView(activeView, innovations), [activeView, innovations]);

  // Secondary metrics specific to the view
  const secondaryMetrics = useMemo(() => getSecondaryMetrics(activeView, innovations), [activeView, innovations]);

  // Get actionable insights
  const insights = useMemo(() => getActionableInsights(activeView, innovations), [activeView, innovations]);

  if (!innovations.length) {
    return <div className='text-center text-gray-500 dark:text-gray-400 py-8'>No innovation data available for analysis</div>;
  }

  return (
    <div className='space-y-6' role='region' aria-label='Cluster insights and metrics'>
      {/* Key metrics */}
      <div className='grid grid-cols-2 gap-4'>
        {metrics.map((metric, index) => (
          <div
            key={index}
            className='bg-gray-50 dark:bg-gray-700 rounded-lg p-3'
            role='figure'
            aria-label={metric.ariaLabel || `${metric.label}: ${metric.value}`}
          >
            <p className='text-xs text-gray-500 dark:text-gray-400'>{metric.label}</p>
            <p className='text-2xl font-semibold mt-1' style={{ color: metric.color }}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* View-specific insights */}
      <div role='region' aria-label='Distribution metrics'>
        <h3 className='text-sm font-medium mb-3'>Key Distribution</h3>
        <div className='space-y-3'>
          {secondaryMetrics.map((metric, index) => (
            <div key={index} className='relative'>
              <div className='flex justify-between text-xs mb-1'>
                <span className='font-medium'>{metric.label}</span>
                <span aria-label={`${metric.percentage}%`}>{metric.percentage}%</span>
              </div>
              <div
                className='w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2'
                role='progressbar'
                aria-valuenow={metric.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${metric.label} distribution`}
              >
                <div
                  className='h-2 rounded-full transition-all duration-300'
                  style={{
                    width: `${metric.percentage}%`,
                    backgroundColor: metric.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actionable insights */}
      <div role='region' aria-label='Actionable insights'>
        <h3 className='text-sm font-medium mb-2'>Actionable Insights</h3>
        <ul className='space-y-2' role='list'>
          {insights.map((insight, index) => (
            <li key={index} className='text-xs flex items-start' role='listitem'>
              <span className='flex-shrink-0 h-4 w-4 mr-1 mt-0.5' aria-hidden='true'>
                <svg className='h-4 w-4 text-blue-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </span>
              <span className='text-gray-600 dark:text-gray-300'>{insight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**
 * Helper function to calculate percentage
 */
const calculatePercentage = (count: number, total: number): number => Math.round((count / total) * 100);

/**
 * Get metrics appropriate for the current view
 */
function getMetricsForView(activeView: string, innovations: ProcessedInnovation[]): Metric[] {
  switch (activeView) {
    case 'technology': {
      const domains = new Set(innovations.map((item) => item.technologyDomain));
      const highImpactTech = innovations.filter((i) => i.businessImpact === 'High Impact').length;

      return [
        {
          label: 'Technology Domains',
          value: domains.size,
          color: COLORS.blue.primary,
          ariaLabel: `Number of technology domains: ${domains.size}`,
        },
        {
          label: 'High Impact Innovations',
          value: highImpactTech,
          color: COLORS.green.primary,
          ariaLabel: `Number of high impact innovations: ${highImpactTech}`,
        },
      ];
    }

    case 'impact': {
      const highImpact = innovations.filter((i) => i.businessImpact === 'High Impact').length;
      const alignments = new Set(innovations.map((item) => item.strategicAlignment));
      const highImpactPercentage = calculatePercentage(highImpact, innovations.length);

      return [
        {
          label: 'High Impact %',
          value: `${highImpactPercentage}%`,
          color: COLORS.green.primary,
          ariaLabel: `High impact percentage: ${highImpactPercentage}%`,
        },
        {
          label: 'Strategic Alignments',
          value: alignments.size,
          color: COLORS.blue.primary,
          ariaLabel: `Number of strategic alignments: ${alignments.size}`,
        },
      ];
    }

    case 'implementation': {
      const highComplexity = innovations.filter((i) => i.implementationComplexity === 'High Complexity').length;
      const lowComplexity = innovations.filter((i) => i.implementationComplexity === 'Low Complexity').length;
      const highComplexityPercentage = calculatePercentage(highComplexity, innovations.length);
      const lowComplexityPercentage = calculatePercentage(lowComplexity, innovations.length);

      return [
        {
          label: 'High Complexity %',
          value: `${highComplexityPercentage}%`,
          color: COLORS.red.primary,
          ariaLabel: `High complexity percentage: ${highComplexityPercentage}%`,
        },
        {
          label: 'Low Complexity %',
          value: `${lowComplexityPercentage}%`,
          color: COLORS.green.secondary,
          ariaLabel: `Low complexity percentage: ${lowComplexityPercentage}%`,
        },
      ];
    }

    default:
      return [];
  }
}

/**
 * Get secondary metrics based on the active view
 */
function getSecondaryMetrics(activeView: string, innovations: ProcessedInnovation[]): SecondaryMetric[] {
  const total = innovations.length;

  switch (activeView) {
    case 'technology': {
      // Count innovations by domain
      const domainCounts = innovations.reduce<Record<string, number>>((acc, innovation) => {
        const domain = innovation.technologyDomain;
        acc[domain] = (acc[domain] || 0) + 1;
        return acc;
      }, {});

      // Get top 3 domains
      return Object.entries(domainCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([domain, count]) => ({
          label: domain,
          percentage: calculatePercentage(count, total),
          color: DOMAIN_COLORS[domain] || COLORS.gray,
          ariaLabel: `${domain}: ${calculatePercentage(count, total)}% of innovations`,
        }));
    }

    case 'impact': {
      const impactCategories = {
        'High Impact': COLORS.green.primary,
        'Medium Impact': COLORS.amber.primary,
        'Incremental Impact': COLORS.blue.primary,
      };

      return Object.entries(impactCategories).map(([impact, color]) => {
        const count = innovations.filter((i) => i.businessImpact === impact).length;
        return {
          label: impact,
          percentage: calculatePercentage(count, total),
          color,
          ariaLabel: `${impact}: ${calculatePercentage(count, total)}% of innovations`,
        };
      });
    }

    case 'implementation': {
      const complexityLevels = {
        'High Complexity': COLORS.red.primary,
        'Medium Complexity': COLORS.amber.primary,
        'Low Complexity': COLORS.green.secondary,
      };

      return Object.entries(complexityLevels).map(([complexity, color]) => {
        const count = innovations.filter((i) => i.implementationComplexity === complexity).length;
        return {
          label: complexity,
          percentage: calculatePercentage(count, total),
          color,
          ariaLabel: `${complexity}: ${calculatePercentage(count, total)}% of innovations`,
        };
      });
    }

    default:
      return [];
  }
}

/**
 * Get actionable insights based on the current view
 */
function getActionableInsights(activeView: string, innovations: ProcessedInnovation[]): string[] {
  try {
    switch (activeView) {
      case 'technology': {
        const domainCounts = innovations.reduce<Record<string, number>>((acc, innovation) => {
          const domain = innovation.technologyDomain;
          acc[domain] = (acc[domain] || 0) + 1;
          return acc;
        }, {});

        const sortedDomains = Object.entries(domainCounts).sort((a, b) => b[1] - a[1]);

        // Handle empty domains case
        if (sortedDomains.length === 0) {
          return [
            'No technology domains found in the current dataset.',
            'Consider adding technology domain classifications to your innovations.',
            'Review your data collection process to ensure domain information is being captured.',
            'Set up a standardized domain classification system for future innovations.',
          ];
        }

        const [topDomain] = sortedDomains[0];
        const [bottomDomain] = sortedDomains[sortedDomains.length - 1];

        return [
          `${topDomain} represents the largest cluster in your portfolio, consider leveraging this expertise more broadly.`,
          `${bottomDomain} has minimal representation, evaluate if this aligns with strategic intentions.`,
          'Consider cross-domain initiatives that combine strengths from multiple technology areas.',
          'Review your domain distribution against market trends to identify potential gaps.',
        ];
      }

      case 'impact': {
        const highImpact = innovations.filter((i) => i.businessImpact === 'High Impact').length;
        const highImpactPercentage = calculatePercentage(highImpact, innovations.length);

        return [
          `${
            highImpactPercentage > 40
              ? 'Maintain your strong focus on high-impact initiatives'
              : 'Consider shifting resources toward higher-impact opportunities'
          }.`,
          'Standardize your impact assessment methodology to ensure consistent evaluation.',
          'Consider creating a pipeline visualization to track initiatives from concept to high-impact outcomes.',
          'Evaluate the correlation between impact and specific innovation characteristics to identify success patterns.',
        ];
      }

      case 'implementation': {
        const highComplexity = innovations.filter((i) => i.implementationComplexity === 'High Complexity').length;
        const highComplexityPercentage = calculatePercentage(highComplexity, innovations.length);

        return [
          `${
            highComplexityPercentage > 50
              ? 'Your portfolio is weighted toward complex initiatives; consider adding some quick wins'
              : 'Your portfolio has a healthy complexity balance'
          }.`,
          'Develop specialized implementation capabilities for your most complex technology domains.',
          'Implement phase-gating for high-complexity initiatives to manage risk.',
          "Review your low-complexity initiatives to ensure they're receiving appropriate attention.",
        ];
      }

      default:
        return [];
    }
  } catch (error) {
    console.error('Error generating insights:', error);
    return ['Unable to generate insights at this time.'];
  }
}

export default ClusterInsights;
