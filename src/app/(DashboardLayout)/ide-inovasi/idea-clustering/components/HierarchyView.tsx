// src/app/(DashboardLayout)/ide-inovasi/idea-clustering/components/HierarchyView.tsx
'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import mermaid from 'mermaid';
import { BiZoomIn, BiZoomOut, BiReset } from 'react-icons/bi';

/**
 * HierarchyView component
 *
 * Renders a hierarchical view of innovations using Mermaid diagram with zoom and pan capabilities.
 */
const HierarchyView = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Initialize mermaid
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        diagramPadding: 8,
      },
    });

    // Render all mermaid diagrams
    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
  }, []);

  // This is the fixed mermaid diagram code
  const mermaidCode = `
flowchart TD
    classDef smartGrid fill:#0891B2,color:white
    classDef digitalTwin fill:#7C3AED,color:white
    classDef storage fill:#DC2626,color:white
    classDef solar fill:#D97706,color:white
    classDef hydrogen fill:#059669,color:white
    classDef ai fill:#4F46E5,color:white
    classDef carbon fill:#84CC16,color:white
    classDef blockchain fill:#DB2777,color:white
    classDef ev fill:#9333EA,color:white
    classDef exploration fill:#F59E0B,color:white
    classDef highImpact stroke:#15803D,stroke-width:3px
    classDef transformational stroke:#DC2626,stroke-width:4px,stroke-dasharray: 5 5
    
    ENERGY[Energy Technology Domains]
    
    RENEWABLE[Renewable Energy]
    GRID[Grid Technology]
    STORAGE[Energy Storage]
    DIGITAL[Digital Solutions]
    OIL_GAS[Oil & Gas]
    CARBON[Carbon Management]
    
    ENERGY --> RENEWABLE
    ENERGY --> GRID
    ENERGY --> STORAGE
    ENERGY --> DIGITAL
    ENERGY --> OIL_GAS
    ENERGY --> CARBON
    
    RENEWABLE --> SOLAR[Solar Energy]:::solar
    RENEWABLE --> HYDRO[Hydro Energy]
    RENEWABLE --> GEO[Geothermal]
    RENEWABLE --> BIO[Biomass]
    RENEWABLE --> HYDROGEN[Hydrogen]:::hydrogen
    
    GRID --> SMARTGRID[Smart Grid]:::smartGrid
    GRID --> VPP[Virtual Power Plant]
    GRID --> EV[EV Charging]:::ev
    
    STORAGE --> BATTERY[Battery Storage]:::storage
    STORAGE --> THERMAL[Thermal Storage]
    
    DIGITAL --> TWIN[Digital Twin]:::digitalTwin
    DIGITAL --> PREDICTIVE[Predictive Maintenance]
    DIGITAL --> BLOCKCHAIN[Blockchain Trading]:::blockchain
    DIGITAL --> AI_ML[AI & Machine Learning]:::ai
    
    OIL_GAS --> EXPLORATION[Exploration Tech]:::exploration
    OIL_GAS --> PIPELINE[Pipeline Monitoring]
    OIL_GAS --> REFINERY[Refinery Optimization]
    
    CARBON --> CAPTURE[Carbon Capture]:::carbon
    CARBON --> OFFSET[Carbon Offsetting]
    
    SMARTGRID --> SG1[Grid Optimization]
    class SG1 transformational
    
    BATTERY --> BAT1[Utility Scale Storage]
    class BAT1 highImpact
    
    SOLAR --> SOL1[Solar Forecasting]
    class SOL1 highImpact
    
    TWIN --> DT1[Refinery Digital Twin]
    class DT1 highImpact
    
    AI_ML --> AI1[Drilling Optimization]
    class AI1 highImpact
    
    HYDROGEN --> H1[Green Hydrogen Production]
    class H1 transformational
    
    EXPLORATION --> EXP1[Seismic AI Analysis]
    class EXP1 highImpact
    
    BLOCKCHAIN --> BC1[P2P Energy Trading]
    class BC1 highImpact
    
    CAPTURE --> CC1[ML Optimization]
    class CC1 highImpact
  `;

  // Zoom handling
  const handleZoom = useCallback((factor: number) => {
    setScale((prevScale) => {
      const newScale = prevScale * factor;
      // Limit zoom range between 0.5 and 3
      return Math.min(Math.max(newScale, 0.5), 3);
    });
  }, []);

  // Mouse wheel zoom
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const factor = e.deltaY > 0 ? 0.9 : 1.1;
        handleZoom(factor);
      }
    },
    [handleZoom]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  // Drag handling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    },
    [isDragging, dragStart]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Reset view
  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className='flex flex-col h-full relative'>
      <h3 className='text-lg font-medium mb-4'>Innovation Technology Hierarchy</h3>

      {/* Legend */}
      <div className='mb-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs'>
        <div className='flex items-center'>
          <div className='w-3 h-3 rounded-full bg-indigo-600 mr-1'></div>
          <span>AI & Machine Learning</span>
        </div>
        <div className='flex items-center'>
          <div className='w-3 h-3 rounded-full bg-violet-600 mr-1'></div>
          <span>Digital Twin</span>
        </div>
        <div className='flex items-center'>
          <div className='w-3 h-3 rounded-full bg-cyan-600 mr-1'></div>
          <span>Smart Grid</span>
        </div>
        <div className='flex items-center'>
          <div className='w-3 h-3 rounded-full bg-red-600 mr-1'></div>
          <span>Energy Storage</span>
        </div>
        <div className='flex items-center'>
          <div className='w-3 h-3 rounded-full bg-amber-600 mr-1'></div>
          <span>Solar Energy</span>
        </div>
        <div className='flex items-center'>
          <div className='w-3 h-3 rounded-full bg-emerald-600 mr-1'></div>
          <span>Hydrogen</span>
        </div>
        <div className='flex items-center'>
          <div className='w-3 h-3 border-2 border-green-700 rounded-full mr-1'></div>
          <span>High Impact</span>
        </div>
        <div className='flex items-center'>
          <div className='w-3 h-3 border-2 border-red-600 border-dashed rounded-full mr-1'></div>
          <span>Transformational</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className='absolute top-4 right-4 z-10 flex gap-2 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-lg'>
        <button onClick={() => handleZoom(1.1)} className='p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg' title='Zoom In'>
          <BiZoomIn className='w-5 h-5' />
        </button>
        <button onClick={() => handleZoom(0.9)} className='p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg' title='Zoom Out'>
          <BiZoomOut className='w-5 h-5' />
        </button>
        <button onClick={resetView} className='p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg' title='Reset View'>
          <BiReset className='w-5 h-5' />
        </button>
      </div>

      {/* Mermaid Diagram */}
      <div
        ref={containerRef}
        className='flex-grow bg-white dark:bg-gray-800 rounded-lg p-4 overflow-hidden cursor-grab active:cursor-grabbing'
        onMouseDown={handleMouseDown}
      >
        <div
          className='mermaid w-full max-w-full transform transition-transform duration-100'
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: '0 0',
          }}
        >
          {mermaidCode}
        </div>
      </div>

      <div className='mt-4 text-xs text-gray-500 dark:text-gray-400'>
        <p>
          This hierarchy shows the relationship between different energy technology domains and specific innovations. Items with green borders
          represent high-impact initiatives, while dashed red borders indicate transformational innovations with potential industry-wide impact.
        </p>
      </div>
    </div>
  );
};

export default HierarchyView;
