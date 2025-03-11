// src/app/(DashboardLayout)/ide-inovasi/idea-clustering/components/ImplementationStatusView.tsx
import React, { useState, useMemo, KeyboardEvent } from 'react';
import { ImplementationStatusViewProps, ProcessedInnovation } from '../types';

interface ComplexityColors {
  [key: string]: string;
}

interface DomainColors {
  [key: string]: string;
}

interface MatrixCell {
  complexity: string;
  innovations: ProcessedInnovation[];
}

interface MatrixRow {
  domain: string;
  complexities: MatrixCell[];
}

// Complexity categories
const complexityLevels = ['High Complexity', 'Medium Complexity', 'Low Complexity'];

// Color mapping for complexity
const complexityColors: ComplexityColors = {
  'High Complexity': '#DC2626', // red-600
  'Medium Complexity': '#D97706', // amber-600
  'Low Complexity': '#059669', // emerald-600
};

// Color mapping for domains
const domainColors: DomainColors = {
  'Drone & AI': '#4F46E5', // indigo-600
  IoT: '#7C3AED', // violet-600
  'Dashboard & Analytics': '#2563EB', // blue-600
  'RFID & Tracking': '#D97706', // amber-600
  'Mobile Applications': '#DC2626', // red-600
  'Cloud Computing': '#0891B2', // cyan-600
  'ERP Systems': '#059669', // emerald-600
  'AI & Machine Learning': '#7C3AED', // violet-600
  'Knowledge Management': '#4338CA', // indigo-700
  'Project Management': '#0369A1', // sky-700
  'Other Technologies': '#6B7280', // gray-500
};

/**
 * ImplementationStatusView component
 *
 * Visualizes innovations based on their implementation complexity and technology domain
 * using a quadrant-based visualization with accessibility support.
 */
const ImplementationStatusView = ({ innovations }: ImplementationStatusViewProps) => {
  const [selectedComplexity, setSelectedComplexity] = useState<string | null>(null);
  const [hoveredInnovation, setHoveredInnovation] = useState<ProcessedInnovation | null>(null);
  const [focusedInnovation, setFocusedInnovation] = useState<ProcessedInnovation | null>(null);

  // Derive domains from the innovations data
  const domains = useMemo(() => [...new Set(innovations.map((item) => item.technologyDomain))], [innovations]);

  // Filter innovations based on selected complexity
  const filteredInnovations = useMemo(
    () => (selectedComplexity ? innovations.filter((i) => i.implementationComplexity === selectedComplexity) : innovations),
    [innovations, selectedComplexity]
  );

  // Create a 2D matrix of domain vs complexity
  const matrix = useMemo<MatrixRow[]>(
    () =>
      domains.map((domain) => ({
        domain,
        complexities: complexityLevels.map((complexity) => ({
          complexity,
          innovations: filteredInnovations.filter((i) => i.technologyDomain === domain && i.implementationComplexity === complexity),
        })),
      })),
    [domains, filteredInnovations]
  );

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>, innovation: ProcessedInnovation) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setFocusedInnovation(focusedInnovation === innovation ? null : innovation);
    }
  };

  return (
    <div className='flex flex-col h-full'>
      {/* Complexity filters */}
      <div className='flex flex-wrap gap-2 mb-4' role='toolbar' aria-label='Complexity filter options'>
        <button
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            selectedComplexity === null
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setSelectedComplexity(null)}
          aria-pressed={selectedComplexity === null}
          aria-label='Show all complexity levels'
        >
          All Complexity Levels
        </button>

        {complexityLevels.map((complexity) => (
          <button
            key={complexity}
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              selectedComplexity === complexity
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setSelectedComplexity(complexity === selectedComplexity ? null : complexity)}
            style={{
              backgroundColor: selectedComplexity === complexity ? `${complexityColors[complexity]}20` : '',
              color: selectedComplexity === complexity ? complexityColors[complexity] : '',
            }}
            aria-pressed={selectedComplexity === complexity}
            aria-label={`${complexity} (${innovations.filter((i) => i.implementationComplexity === complexity).length} innovations)`}
          >
            {complexity} ({innovations.filter((i) => i.implementationComplexity === complexity).length})
          </button>
        ))}
      </div>

      {/* Visualization area */}
      <div className='flex-grow overflow-auto bg-gray-50 dark:bg-gray-900 rounded-lg p-4'>
        <div className='w-full min-h-[500px]'>
          {/* Implementation complexity heatmap visualization */}
          <div className='w-full overflow-x-auto'>
            <table className='min-w-full border-collapse' role='grid' aria-label='Implementation complexity matrix'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='p-2 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-left text-xs font-medium text-gray-600 dark:text-gray-400'
                  >
                    Technology Domain
                  </th>
                  {complexityLevels.map((complexity) => (
                    <th
                      key={complexity}
                      scope='col'
                      className='p-2 border border-gray-200 dark:border-gray-700 text-center text-xs font-medium'
                      style={{
                        backgroundColor: `${complexityColors[complexity]}10`,
                        color: complexityColors[complexity],
                      }}
                    >
                      {complexity}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row) => (
                  <tr key={row.domain}>
                    <th
                      scope='row'
                      className='p-2 border border-gray-200 dark:border-gray-700 text-xs font-medium'
                      style={{ color: domainColors[row.domain] }}
                    >
                      {row.domain}
                    </th>
                    {row.complexities.map((cell) => (
                      <td key={`${row.domain}-${cell.complexity}`} className='p-2 border border-gray-200 dark:border-gray-700 align-top'>
                        {cell.innovations.length > 0 ? (
                          <div className='flex flex-col gap-2'>
                            {cell.innovations.map((innovation) => (
                              <div
                                key={innovation.id}
                                className='bg-white dark:bg-gray-800 p-2 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer'
                                onMouseEnter={() => setHoveredInnovation(innovation)}
                                onMouseLeave={() => setHoveredInnovation(null)}
                                onFocus={() => setFocusedInnovation(innovation)}
                                onBlur={() => setFocusedInnovation(null)}
                                onKeyPress={(e) => handleKeyPress(e, innovation)}
                                tabIndex={0}
                                role='button'
                                aria-label={`${innovation.title} in ${row.domain}`}
                                aria-expanded={hoveredInnovation === innovation || focusedInnovation === innovation}
                              >
                                <h4 className='text-xs font-medium line-clamp-2'>{innovation.title}</h4>
                                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>{innovation.position}</p>

                                {/* Detail tooltip on hover/focus */}
                                {(hoveredInnovation === innovation || focusedInnovation === innovation) && (
                                  <div
                                    className='mt-2 p-2 bg-gray-50 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 text-xs'
                                    role='tooltip'
                                    aria-live='polite'
                                  >
                                    <p className='text-gray-600 dark:text-gray-300 line-clamp-3'>{innovation.description}</p>
                                    <div className='mt-1 flex items-center gap-1'>
                                      <span
                                        className='inline-block px-1.5 py-0.5 rounded-full text-xs'
                                        style={{
                                          backgroundColor: `${domainColors[innovation.technologyDomain]}20`,
                                          color: domainColors[innovation.technologyDomain],
                                        }}
                                      >
                                        {innovation.technologyDomain}
                                      </span>
                                      <span
                                        className='inline-block px-1.5 py-0.5 rounded-full text-xs'
                                        style={{
                                          backgroundColor: `${complexityColors[innovation.implementationComplexity]}20`,
                                          color: complexityColors[innovation.implementationComplexity],
                                        }}
                                      >
                                        {innovation.implementationComplexity}
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className='h-12 flex items-center justify-center text-gray-400 text-xs'>No innovations</div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Instructions / Legend */}
      <div
        className='mt-4 flex flex-wrap gap-4 justify-center text-xs text-gray-500 dark:text-gray-400'
        role='list'
        aria-label='Complexity level legend'
      >
        <div className='flex items-center' role='listitem'>
          <div className='w-3 h-3 rounded-full bg-red-500 mr-1' aria-hidden='true'></div>
          <span>High Complexity</span>
        </div>
        <div className='flex items-center' role='listitem'>
          <div className='w-3 h-3 rounded-full bg-amber-500 mr-1' aria-hidden='true'></div>
          <span>Medium Complexity</span>
        </div>
        <div className='flex items-center' role='listitem'>
          <div className='w-3 h-3 rounded-full bg-emerald-500 mr-1' aria-hidden='true'></div>
          <span>Low Complexity</span>
        </div>
      </div>
    </div>
  );
};

export default ImplementationStatusView;
