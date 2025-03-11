// src/app/(DashboardLayout)/ide-inovasi/idea-clustering/components/TechnologyClusterView.tsx
import React, { useState, useEffect, KeyboardEvent } from 'react';
import { TechnologyClusterViewProps, ProcessedInnovation } from '../types';

interface DomainCount {
  domain: string;
  count: number;
}

interface DomainColors {
  [key: string]: string;
}

/**
 * TechnologyClusterView component
 *
 * Visualizes innovations clustered by technology domain using a force-directed layout
 * with interactive features for exploration and accessibility support.
 */
const TechnologyClusterView = ({ innovations }: TechnologyClusterViewProps) => {
  // States for filter and tooltip with proper typing
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [hoveredInnovation, setHoveredInnovation] = useState<ProcessedInnovation | null>(null);

  // Derive domains from the innovations data
  const domains = [...new Set(innovations.map((item) => item.technologyDomain))];

  // Generate colors for domains with type safety
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

  // Count innovations by domain
  const domainCounts = domains.map((domain) => ({
    domain,
    count: innovations.filter((i) => i.technologyDomain === domain).length,
  }));

  // Filter innovations based on selected domain
  const filteredInnovations = selectedDomain ? innovations.filter((i) => i.technologyDomain === selectedDomain) : innovations;

  return (
    <div className='flex flex-col h-full'>
      {/* Domain filters */}
      <div className='flex flex-wrap gap-2 mb-4'>
        <button
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            selectedDomain === null
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setSelectedDomain(null)}
          aria-label='Show all technology domains'
          aria-pressed={selectedDomain === null}
        >
          All Domains
        </button>

        {domains.map((domain) => (
          <button
            key={domain}
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              selectedDomain === domain
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setSelectedDomain(domain === selectedDomain ? null : domain)}
            style={{
              backgroundColor: selectedDomain === domain ? `${domainColors[domain]}20` : '',
              color: selectedDomain === domain ? domainColors[domain] : '',
            }}
            aria-label={`${domain} domain with ${innovations.filter((i) => i.technologyDomain === domain).length} innovations`}
            aria-pressed={selectedDomain === domain}
          >
            {domain} ({innovations.filter((i) => i.technologyDomain === domain).length})
          </button>
        ))}
      </div>

      {/* Main visualization */}
      <div className='flex-grow overflow-hidden bg-gray-50 dark:bg-gray-900 rounded-lg p-4 relative'>
        {/* Force-directed visualization */}
        <div className='w-full h-full flex items-center justify-center'>
          <svg
            className='w-full h-full max-h-[500px]'
            viewBox='0 0 800 600'
            role='img'
            aria-label='Technology domain visualization showing clusters of innovations'
          >
            <title>Technology Domain Clusters</title>
            <desc>A visualization showing innovations grouped by technology domains in a circular layout</desc>
            {/* Center circles for domains */}
            {domains.map((domain, index) => {
              // Position domains in a circle
              const angle = (2 * Math.PI * index) / domains.length;
              const radius = 200; // Circle radius
              const x = 400 + radius * Math.cos(angle);
              const y = 300 + radius * Math.sin(angle);

              const domainInnovations = innovations.filter((i) => i.technologyDomain === domain);
              const circleSize = 20 + domainInnovations.length * 5; // Size based on count

              return (
                <g
                  key={domain}
                  onClick={() => setSelectedDomain(domain === selectedDomain ? null : domain)}
                  onKeyPress={(e: KeyboardEvent<SVGGElement>) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedDomain(domain === selectedDomain ? null : domain);
                    }
                  }}
                  role='button'
                  tabIndex={0}
                  aria-label={`${domain} domain with ${domainInnovations.length} innovations`}
                  aria-pressed={selectedDomain === domain}
                >
                  {/* Domain circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={circleSize}
                    fill={`${domainColors[domain]}40`}
                    stroke={domainColors[domain]}
                    strokeWidth='2'
                    className='cursor-pointer'
                  />

                  {/* Domain label */}
                  <text
                    x={x}
                    y={y}
                    textAnchor='middle'
                    dominantBaseline='middle'
                    fill={domainColors[domain]}
                    fontWeight='bold'
                    fontSize='14'
                    className='pointer-events-none'
                  >
                    {domain}
                  </text>

                  {/* Innovation nodes */}
                  {selectedDomain === domain || selectedDomain === null
                    ? domainInnovations.map((innovation, i) => {
                        // Position innovations around their domain in a smaller circle
                        const innovAngle = (2 * Math.PI * i) / domainInnovations.length;
                        const innerRadius = circleSize + 20;
                        const ix = x + innerRadius * Math.cos(innovAngle);
                        const iy = y + innerRadius * Math.sin(innovAngle);

                        return (
                          <g
                            key={innovation.id}
                            onMouseEnter={() => setHoveredInnovation(innovation)}
                            onMouseLeave={() => setHoveredInnovation(null)}
                            onFocus={() => setHoveredInnovation(innovation)}
                            onBlur={() => setHoveredInnovation(null)}
                            role='button'
                            tabIndex={0}
                            aria-label={`Innovation: ${innovation.title}`}
                            className='cursor-pointer'
                            onKeyPress={(e: KeyboardEvent<SVGGElement>) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setHoveredInnovation(innovation);
                              }
                            }}
                          >
                            <circle cx={ix} cy={iy} r={8} fill={domainColors[domain]} opacity={hoveredInnovation === innovation ? 1 : 0.7} />

                            {/* Only show labels for hovered innovation to reduce clutter */}
                            {hoveredInnovation === innovation && (
                              <text x={ix} y={iy + 20} textAnchor='middle' fill='currentColor' fontSize='12' className='pointer-events-none'>
                                {innovation.title.length > 20 ? innovation.title.substring(0, 20) + '...' : innovation.title}
                              </text>
                            )}
                          </g>
                        );
                      })
                    : null}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Tooltip for hovered/focused innovation */}
        {hoveredInnovation && (
          <div
            className='absolute top-4 right-4 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700'
            role='tooltip'
            aria-live='polite'
          >
            <h4 className='font-medium text-sm mb-1' id={`innovation-title-${hoveredInnovation.id}`}>
              {hoveredInnovation.title}
            </h4>
            <p className='text-xs text-gray-600 dark:text-gray-400 mb-2' id={`innovation-meta-${hoveredInnovation.id}`}>
              {hoveredInnovation.position} • {hoveredInnovation.technologyDomain}
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400 line-clamp-3'>{hoveredInnovation.description}</p>
            <div className='mt-2 text-xs'>
              <span
                className='inline-block px-2 py-0.5 rounded-full text-xs'
                style={{
                  backgroundColor: `${domainColors[hoveredInnovation.technologyDomain]}20`,
                  color: domainColors[hoveredInnovation.technologyDomain],
                }}
              >
                {hoveredInnovation.businessImpact}
              </span>
              <span className='mx-1'>•</span>
              <span className='text-gray-500 dark:text-gray-400'>{hoveredInnovation.implementationComplexity}</span>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className='mt-4 flex flex-wrap gap-4 justify-center text-xs text-gray-500 dark:text-gray-400'>
        <div className='flex items-center'>
          <div className='w-3 h-3 rounded-full bg-blue-500 mr-1'></div>
          <span>Circle size = Number of innovations</span>
        </div>
        <div className='flex items-center'>
          <div className='w-3 h-3 rounded-full bg-blue-700 mr-1'></div>
          <span>Dark color = Higher impact</span>
        </div>
      </div>
    </div>
  );
};

export default TechnologyClusterView;
