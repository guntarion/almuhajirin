/**
 * src/Components/IdeaGraph/ForceGraph.tsx
 *
 * A force-directed graph visualization component using D3.js for displaying
 * relationships between innovation ideas. The graph shows ideas as nodes
 * and their relationships as edges, with different colors representing
 * different types of relationships.
 */

'use client';

import { useEffect, useRef, useMemo } from 'react';
import { GraphData, Node, Link, RelationshipType } from '@/utils/ideaRelationshipUtils';
import * as d3 from 'd3';

interface ForceGraphProps {
  data: GraphData;
  width: number;
  height: number;
  onNodeClick: (node: Node) => void;
  loading?: boolean;
}

// Extend Node type with d3's required properties
type SimNode = Node & d3.SimulationNodeDatum;
type SimLink = d3.SimulationLinkDatum<SimNode> & Link;

// Type guard functions to ensure proper type checking for D3 simulation nodes and links
const isSimNode = (node: any): node is SimNode => {
  return node && typeof node.id === 'string' && typeof node.name === 'string';
};

const isSimLink = (link: any): link is SimLink => {
  return link && (typeof link.source === 'string' || isSimNode(link.source)) && (typeof link.target === 'string' || isSimNode(link.target));
};

/**
 * Force Graph Component
 *
 * Features:
 * - Interactive node dragging
 * - Zoom and pan capabilities
 * - Relationship type legend
 * - Node labels and tooltips
 * - Accessibility support
 * - Loading and error states
 */
const ForceGraph: React.FC<ForceGraphProps> = ({ data, width, height, onNodeClick, loading = false }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  // Memoize color scales to prevent unnecessary recalculations
  const { relationshipColorScale, nodeColorScale } = useMemo(
    () => ({
      relationshipColorScale: d3
        .scaleOrdinal<string>()
        .domain(Object.values(RelationshipType))
        .range(['#3B82F6', '#10B981', '#F59E0B', '#6366F1', '#EC4899']),
      nodeColorScale: d3.scaleOrdinal(d3.schemeCategory10),
    }),
    []
  );

  useEffect(() => {
    if (!svgRef.current || !data.nodes.length || loading) return;

    // Clean up any existing graph before creating a new one
    d3.select(svgRef.current).selectAll('*').remove();

    // Convert nodes and links to simulation compatible types with type checking
    const nodes: SimNode[] = data.nodes.map((node) => ({ ...node })).filter(isSimNode);
    const links: SimLink[] = data.links.map((link) => ({ ...link })).filter(isSimLink);

    // Initialize the force simulation with nodes and force configurations
    const simulation = d3
      .forceSimulation<SimNode>(nodes)
      .force(
        'link',
        d3
          .forceLink<SimNode, SimLink>(links)
          .id((d) => d.id)
          .distance(100)
      )
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const svg = d3.select(svgRef.current);

    // Add zoom behavior for interactive exploration
    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom as any);

    const g = svg.append('g');

    // Add relationship type legend for visual reference
    const legend = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width - 200}, 20)`);

    // Add relationship type legend
    Object.values(RelationshipType).forEach((type, i) => {
      const legendItem = legend.append('g').attr('transform', `translate(0, ${i * 20})`);

      legendItem
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 20)
        .attr('y2', 0)
        .attr('stroke', relationshipColorScale(type))
        .attr('stroke-width', 2);

      legendItem.append('text').attr('x', 25).attr('y', 4).text(type).attr('font-size', '12px');
    });

    // Draw relationship links between nodes
    const linkElements = g
      .append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', (d) => relationshipColorScale(d.type))
      .attr('stroke-width', (d) => Math.sqrt(d.value))
      .attr('stroke-opacity', 0.6);

    // Create container groups for nodes with proper accessibility attributes
    const nodeGroup = g
      .append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('role', 'button')
      .attr('tabindex', 0)
      .attr('aria-label', (d) => `Node: ${d.name}, Position: ${d.position}`)
      .call(drag(simulation) as any);

    // Draw circular nodes with size based on value and color based on group
    const nodeElements = nodeGroup
      .append('circle')
      .attr('r', (d) => Math.max(5, Math.min(15, d.value)))
      .attr('fill', (d) => nodeColorScale(d.group))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .attr('class', 'node-circle')
      .style('filter', 'url(#glow)');

    // Add visible labels next to nodes for better readability
    const labels = nodeGroup
      .append('text')
      .text((d) => d.name)
      .attr('dx', 12)
      .attr('dy', 4)
      .attr('font-size', '12px')
      .style('pointer-events', 'none');

    // Add mouse and keyboard interaction handlers for accessibility
    nodeGroup
      .on('click', (event, d: SimNode) => {
        event.stopPropagation();
        onNodeClick(d);
      })
      .on('keypress', (event, d: SimNode) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onNodeClick(d);
        }
      })
      .on('mouseover', function () {
        d3.select(this).select('circle').transition().duration(200).attr('stroke', '#000').attr('stroke-width', 2);
      })
      .on('mouseout', function () {
        d3.select(this).select('circle').transition().duration(200).attr('stroke', '#fff').attr('stroke-width', 1.5);
      });

    // Update node and link positions on each simulation tick with smooth transitions
    simulation.on('tick', () => {
      linkElements
        .attr('x1', (d) => (isSimNode(d.source) ? d.source.x ?? 0 : 0))
        .attr('y1', (d) => (isSimNode(d.source) ? d.source.y ?? 0 : 0))
        .attr('x2', (d) => (isSimNode(d.target) ? d.target.x ?? 0 : 0))
        .attr('y2', (d) => (isSimNode(d.target) ? d.target.y ?? 0 : 0));

      nodeGroup.attr('transform', (d) => `translate(${d.x ?? 0},${d.y ?? 0})`);
    });

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [data, width, height, onNodeClick]);

  // Configure drag behavior for interactive node positioning
  const drag = (simulation: d3.Simulation<SimNode, undefined>) => {
    function dragstarted(event: d3.D3DragEvent<SVGCircleElement, SimNode, SimNode>) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: d3.D3DragEvent<SVGCircleElement, SimNode, SimNode>) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGCircleElement, SimNode, SimNode>) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag<SVGCircleElement, SimNode>().on('start', dragstarted).on('drag', dragged).on('end', dragended);
  };

  // Loading state
  if (loading) {
    return (
      <div className='w-full h-full flex items-center justify-center bg-white'>
        <div role='status' className='text-gray-500'>
          <svg className='animate-spin h-8 w-8 mr-3' viewBox='0 0 24 24'>
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
          <span className='sr-only'>Loading graph visualization...</span>
        </div>
      </div>
    );
  }

  // Error state for empty data
  if (!data.nodes.length) {
    return (
      <div className='w-full h-full flex items-center justify-center bg-white'>
        <div role='alert' className='text-gray-500'>
          No data available for visualization
        </div>
      </div>
    );
  }

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className='w-full h-full'
      style={{ background: 'white' }}
      role='img'
      aria-label='Force-directed graph visualization of idea relationships'
    >
      <defs>
        <filter id='glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
};

export default ForceGraph;
