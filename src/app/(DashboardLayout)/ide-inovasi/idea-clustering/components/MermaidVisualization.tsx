// src/app/(DashboardLayout)/ide-inovasi/idea-clustering/components/MermaidVisualization.tsx
import React, { useEffect, useState, useMemo } from 'react';
import { MermaidVisualizationProps, ProcessedInnovation } from '../types';

interface MermaidDiagramConfig {
  styles: {
    highImpact: string;
    mediumImpact: string;
    lowComplexity: string;
    mediumComplexity: string;
    highComplexity: string;
  };
}

interface DiagramNode {
  id: string;
  label: string;
  classes: string[];
  parentId?: string;
}

const DIAGRAM_CONFIG: MermaidDiagramConfig = {
  styles: {
    highImpact: 'stroke:#15803D,stroke-width:3px',
    mediumImpact: 'stroke:#CA8A04,stroke-width:2px',
    lowComplexity: 'fill:#059669,color:white',
    mediumComplexity: 'fill:#D97706,color:white',
    highComplexity: 'fill:#DC2626,color:white',
  },
};

/**
 * MermaidVisualization component
 *
 * Renders a Mermaid diagram showing innovation clustering with accessibility
 * support and performance optimizations.
 */
const MermaidVisualization: React.FC<MermaidVisualizationProps> = ({ innovations }) => {
  const [mermaidCode, setMermaidCode] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Generate nodes and relationships
  const { nodes, relationships } = useMemo(() => {
    try {
      const nodesMap: Record<string, DiagramNode> = {
        ROOT: { id: 'ROOT', label: 'Innovation Portfolio', classes: [] },
      };
      const rels: { from: string; to: string }[] = [];

      // Get unique domains
      const domains = [...new Set(innovations.map((item) => item.technologyDomain))];

      // Create domain nodes
      domains.forEach((domain, index) => {
        const domainId = `DOMAIN${index}`;
        nodesMap[domainId] = {
          id: domainId,
          label: domain,
          classes: [],
          parentId: 'ROOT',
        };
        rels.push({ from: 'ROOT', to: domainId });

        // Create innovation nodes
        const domainInnovations = innovations.filter((i) => i.technologyDomain === domain);
        domainInnovations.forEach((innovation, innIndex) => {
          const innovId = `INNOV${index}_${innIndex}`;
          const classes = [];

          if (innovation.businessImpact === 'High Impact') classes.push('highImpact');
          else if (innovation.businessImpact === 'Medium Impact') classes.push('mediumImpact');

          if (innovation.implementationComplexity === 'High Complexity') classes.push('highComplexity');
          else if (innovation.implementationComplexity === 'Medium Complexity') classes.push('mediumComplexity');
          else classes.push('lowComplexity');

          nodesMap[innovId] = {
            id: innovId,
            label: innovation.title.length > 20 ? innovation.title.substring(0, 20) + '...' : innovation.title,
            classes,
            parentId: domainId,
          };
          rels.push({ from: domainId, to: innovId });
        });
      });

      return { nodes: nodesMap, relationships: rels };
    } catch (err) {
      console.error('Error generating diagram structure:', err);
      return { nodes: {}, relationships: [] };
    }
  }, [innovations]);

  // Generate Mermaid diagram code
  useEffect(() => {
    try {
      setIsLoading(true);
      const code = generateMermaidDiagram(nodes, relationships, DIAGRAM_CONFIG);
      setMermaidCode(code);
      setError(null);
    } catch (err) {
      console.error('Error generating Mermaid diagram:', err);
      setError('Failed to generate visualization diagram');
    } finally {
      setIsLoading(false);
    }
  }, [nodes, relationships]);

  if (error) {
    return (
      <div className='p-4 bg-red-50 dark:bg-red-900 rounded-lg text-red-600 dark:text-red-200' role='alert' aria-live='polite'>
        {error}
      </div>
    );
  }

  return (
    <div className='p-4 bg-white dark:bg-gray-800 rounded-lg shadow' role='region' aria-label='Innovation hierarchy visualization'>
      <h2 className='text-lg font-medium mb-4'>Innovation Hierarchy</h2>

      {isLoading ? (
        <div className='flex items-center justify-center h-[200px]' role='status' aria-label='Loading visualization'>
          <div className='animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent'></div>
        </div>
      ) : (
        <>
          {/* In a real application, this would be rendered as a Mermaid diagram */}
          <div
            className='bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-auto max-h-[500px]'
            role='img'
            aria-label='Innovation hierarchy diagram'
          >
            <pre className='text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap' tabIndex={0}>
              <code>{mermaidCode}</code>
            </pre>
          </div>

          {/* Accessibility description */}
          <div className='sr-only'>
            This diagram shows the hierarchical structure of innovations, organized by technology domains. Each innovation is color-coded based on its
            business impact and implementation complexity. High-impact innovations are highlighted with green borders, while implementation complexity
            is shown through different background colors from green (low) to red (high).
          </div>

          {/* Legend */}
          <div className='mt-4 text-sm text-gray-500 dark:text-gray-400' role='complementary' aria-label='Diagram legend'>
            <h3 className='text-xs font-medium mb-2'>Legend</h3>
            <ul className='space-y-1 text-xs'>
              <li>Green border: High Impact Innovation</li>
              <li>Yellow border: Medium Impact Innovation</li>
              <li>Green background: Low Complexity</li>
              <li>Orange background: Medium Complexity</li>
              <li>Red background: High Complexity</li>
            </ul>
          </div>

          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Note: In a real application, this would render as an interactive diagram. The code above demonstrates how innovations would be organized
            hierarchically.
          </p>
        </>
      )}
    </div>
  );
};

/**
 * Generates a Mermaid diagram based on nodes and relationships
 */
function generateMermaidDiagram(
  nodes: Record<string, DiagramNode>,
  relationships: { from: string; to: string }[],
  config: MermaidDiagramConfig
): string {
  try {
    let diagram = 'flowchart TD\n';

    // Add styling classes
    Object.entries(config.styles).forEach(([className, style]) => {
      diagram += `    classDef ${className} ${style}\n`;
    });
    diagram += '\n';

    // Add nodes
    Object.values(nodes).forEach((node) => {
      diagram += `    ${node.id}["${node.label}"]\n`;
    });
    diagram += '\n';

    // Add relationships
    relationships.forEach(({ from, to }) => {
      diagram += `    ${from} --> ${to}\n`;
    });
    diagram += '\n';

    // Add styling to nodes
    Object.values(nodes).forEach((node) => {
      if (node.classes.length > 0) {
        diagram += `    class ${node.id} ${node.classes.join(',')}\n`;
      }
    });

    return diagram;
  } catch (error) {
    console.error('Error in generateMermaidDiagram:', error);
    throw new Error('Failed to generate Mermaid diagram');
  }
}

export default MermaidVisualization;
