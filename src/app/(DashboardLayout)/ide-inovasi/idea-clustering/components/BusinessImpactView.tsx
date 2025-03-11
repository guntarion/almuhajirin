// src/app/(DashboardLayout)/ide-inovasi/idea-clustering/components/BusinessImpactView.tsx
import React, { useState, useMemo, KeyboardEvent } from 'react';
import { BusinessImpactViewProps, ProcessedInnovation } from '../types';

interface ImpactColors {
  [key: string]: string;
}

interface AlignmentColors {
  [key: string]: string;
}

interface InnovationCardProps {
  innovation: ProcessedInnovation;
  onHover: (innovation: ProcessedInnovation | null) => void;
  isHovered: boolean;
  alignmentColors: AlignmentColors;
}

interface ImpactSectionProps {
  impact: string;
  color: string;
  innovations: ProcessedInnovation[];
  hoveredInnovation: ProcessedInnovation | null;
  setHoveredInnovation: (innovation: ProcessedInnovation | null) => void;
  alignmentColors: AlignmentColors;
  selectedAlignment: string | null;
}

// Color constants
const IMPACT_COLORS: ImpactColors = {
  'High Impact': '#15803D', // green-700
  'Medium Impact': '#CA8A04', // yellow-600
  'Incremental Impact': '#2563EB', // blue-600
} as const;

const ALIGNMENT_COLORS: AlignmentColors = {
  'Operational Excellence': '#4F46E5', // indigo-600
  'Customer Experience': '#D97706', // amber-600
  'Safety & Risk Management': '#DC2626', // red-600
  Sustainability: '#059669', // emerald-600
  'General Improvement': '#6B7280', // gray-500
} as const;

const IMPACT_CATEGORIES = ['High Impact', 'Medium Impact', 'Incremental Impact'] as const;

/**
 * InnovationCard Component
 */
const InnovationCard: React.FC<InnovationCardProps> = ({ innovation, onHover, isHovered, alignmentColors }) => {
  return (
    <div
      className='relative bg-gray-50 dark:bg-gray-700 rounded p-3 hover:shadow-md transition-shadow cursor-pointer border border-gray-100 dark:border-gray-600'
      onMouseEnter={() => onHover(innovation)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(innovation)}
      onBlur={() => onHover(null)}
      tabIndex={0}
      role='button'
      aria-expanded={isHovered}
      aria-label={`Innovation: ${innovation.title}`}
      onKeyPress={(e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onHover(isHovered ? null : innovation);
        }
      }}
    >
      <h4 className='text-sm font-medium line-clamp-2 mb-1'>{innovation.title}</h4>
      <p className='text-xs text-gray-600 dark:text-gray-400 mb-1'>{innovation.position}</p>

      {isHovered && <p className='text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mb-2'>{innovation.description}</p>}

      {/* Tags */}
      <div className='flex flex-wrap gap-1 mt-2' role='list' aria-label='Innovation tags'>
        <span
          className='inline-block px-2 py-0.5 rounded-full text-xs'
          style={{
            backgroundColor: `${alignmentColors[innovation.strategicAlignment]}20`,
            color: alignmentColors[innovation.strategicAlignment],
          }}
          role='listitem'
        >
          {innovation.strategicAlignment}
        </span>
        <span className='inline-block px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300' role='listitem'>
          {innovation.technologyDomain}
        </span>
      </div>
    </div>
  );
};

/**
 * ImpactSection Component
 */
const ImpactSection: React.FC<ImpactSectionProps> = ({
  impact,
  color,
  innovations,
  hoveredInnovation,
  setHoveredInnovation,
  alignmentColors,
  selectedAlignment,
}) => {
  return (
    <div
      className='bg-white dark:bg-gray-800 rounded-lg shadow p-4'
      style={{ borderLeft: `4px solid ${color}` }}
      role='region'
      aria-label={`${impact} innovations`}
    >
      <h3 className='text-sm font-medium mb-3 flex justify-between items-center'>
        <span style={{ color }}>{impact}</span>
        <span className='text-xs font-normal text-gray-500 dark:text-gray-400'>{innovations.length} innovations</span>
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {innovations.map((innovation) => (
          <InnovationCard
            key={innovation.id}
            innovation={innovation}
            onHover={setHoveredInnovation}
            isHovered={hoveredInnovation === innovation}
            alignmentColors={alignmentColors}
          />
        ))}
      </div>

      {innovations.length === 0 && (
        <div className='py-6 text-center text-gray-500 dark:text-gray-400 text-sm' role='status' aria-live='polite'>
          No innovations in this category {selectedAlignment ? `with "${selectedAlignment}" alignment` : ''}
        </div>
      )}
    </div>
  );
};

/**
 * BusinessImpactView component
 *
 * Visualizes innovations based on their business impact and strategic alignment
 * using a quadrant-style matrix layout with accessibility support.
 */
const BusinessImpactView: React.FC<BusinessImpactViewProps> = ({ innovations }) => {
  const [hoveredInnovation, setHoveredInnovation] = useState<ProcessedInnovation | null>(null);
  const [selectedAlignment, setSelectedAlignment] = useState<string | null>(null);

  // Derive strategic alignments from the innovations data
  const alignments = useMemo(() => [...new Set(innovations.map((item) => item.strategicAlignment))], [innovations]);

  // Filter innovations based on selected alignment
  const filteredInnovations = useMemo(
    () => (selectedAlignment ? innovations.filter((i) => i.strategicAlignment === selectedAlignment) : innovations),
    [innovations, selectedAlignment]
  );

  // Group innovations by impact category
  const innovationsByImpact = useMemo(
    () =>
      IMPACT_CATEGORIES.map((impact) => ({
        impact,
        innovations: filteredInnovations.filter((i) => i.businessImpact === impact),
      })),
    [filteredInnovations]
  );

  if (!innovations.length) {
    return (
      <div className='flex items-center justify-center h-full' role='status' aria-live='polite'>
        <p className='text-gray-500 dark:text-gray-400'>No innovation data available</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col h-full'>
      {/* Strategic alignment filters */}
      <div className='flex flex-wrap gap-2 mb-4' role='toolbar' aria-label='Strategic alignment filters'>
        <button
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            selectedAlignment === null
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setSelectedAlignment(null)}
          aria-pressed={selectedAlignment === null}
        >
          All Strategic Areas
        </button>

        {alignments.map((alignment) => (
          <button
            key={alignment}
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              selectedAlignment === alignment
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setSelectedAlignment(alignment === selectedAlignment ? null : alignment)}
            style={{
              backgroundColor: selectedAlignment === alignment ? `${ALIGNMENT_COLORS[alignment]}20` : '',
              color: selectedAlignment === alignment ? ALIGNMENT_COLORS[alignment] : '',
            }}
            aria-pressed={selectedAlignment === alignment}
            aria-label={`${alignment} (${innovations.filter((i) => i.strategicAlignment === alignment).length} innovations)`}
          >
            {alignment} ({innovations.filter((i) => i.strategicAlignment === alignment).length})
          </button>
        ))}
      </div>

      {/* Impact matrix visualization */}
      <div className='flex-grow overflow-hidden bg-gray-50 dark:bg-gray-900 rounded-lg p-4' role='region' aria-label='Impact matrix visualization'>
        <div className='w-full h-full min-h-[500px] grid grid-cols-1 gap-4'>
          {innovationsByImpact.map(({ impact, innovations }) => (
            <ImpactSection
              key={impact}
              impact={impact}
              color={IMPACT_COLORS[impact]}
              innovations={innovations}
              hoveredInnovation={hoveredInnovation}
              setHoveredInnovation={setHoveredInnovation}
              alignmentColors={ALIGNMENT_COLORS}
              selectedAlignment={selectedAlignment}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div
        className='mt-4 flex flex-wrap gap-4 justify-center text-xs text-gray-500 dark:text-gray-400'
        role='list'
        aria-label='Impact category legend'
      >
        {Object.entries(IMPACT_COLORS).map(([impact, color]) => (
          <div key={impact} className='flex items-center' role='listitem'>
            <div className='w-3 h-3 rounded-full mr-1' style={{ backgroundColor: color }} aria-hidden='true'></div>
            <span>{impact}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessImpactView;
