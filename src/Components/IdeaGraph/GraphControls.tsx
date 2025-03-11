'use client';

import { useState } from 'react';
import { RelationshipType } from '@/utils/ideaRelationshipUtils';

interface GraphControlsProps {
  jobPositions: string[];
  onFilterChange: (filters: {
    positions: string[];
    relationshipTypes: RelationshipType[];
    minStrength: number;
  }) => void;
}

const GraphControls: React.FC<GraphControlsProps> = ({ 
  jobPositions,
  onFilterChange 
}) => {
  const [selectedPositions, setSelectedPositions] = useState<string[]>(jobPositions);
  const [selectedRelationships, setSelectedRelationships] = useState<RelationshipType[]>(
    Object.values(RelationshipType)
  );
  const [minStrength, setMinStrength] = useState(0.1);
  
  const handlePositionChange = (position: string) => {
    const newPositions = selectedPositions.includes(position)
      ? selectedPositions.filter(p => p !== position)
      : [...selectedPositions, position];
    
    setSelectedPositions(newPositions);
    applyFilters(newPositions, selectedRelationships, minStrength);
  };
  
  const handleRelationshipChange = (type: RelationshipType) => {
    const newRelationships = selectedRelationships.includes(type)
      ? selectedRelationships.filter(t => t !== type)
      : [...selectedRelationships, type];
    
    setSelectedRelationships(newRelationships);
    applyFilters(selectedPositions, newRelationships, minStrength);
  };
  
  const handleStrengthChange = (value: number) => {
    setMinStrength(value);
    applyFilters(selectedPositions, selectedRelationships, value);
  };
  
  const applyFilters = (
    positions: string[], 
    relationships: RelationshipType[], 
    strength: number
  ) => {
    onFilterChange({
      positions,
      relationshipTypes: relationships,
      minStrength: strength
    });
  };
  
  const resetFilters = () => {
    setSelectedPositions(jobPositions);
    setSelectedRelationships(Object.values(RelationshipType));
    setMinStrength(0.1);
    
    onFilterChange({
      positions: jobPositions,
      relationshipTypes: Object.values(RelationshipType),
      minStrength: 0.1
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Graph Controls</h3>
        <div className="flex space-x-2">
          <button
            onClick={resetFilters}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Job Position Filters */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Job Positions</h4>
          <div className="max-h-48 overflow-y-auto">
            {jobPositions.map(position => (
              <div key={position} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`position-${position}`}
                  checked={selectedPositions.includes(position)}
                  onChange={() => handlePositionChange(position)}
                  className="mr-2"
                />
                <label htmlFor={`position-${position}`} className="text-sm">
                  {position}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Relationship Type Filters */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Relationship Types</h4>
          <div>
            {Object.values(RelationshipType).map(type => (
              <div key={type} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`relationship-${type}`}
                  checked={selectedRelationships.includes(type)}
                  onChange={() => handleRelationshipChange(type)}
                  className="mr-2"
                />
                <label htmlFor={`relationship-${type}`} className="text-sm">
                  {type}
                </label>
              </div>
            ))}
          </div>
          
          {/* Relationship Strength Slider */}
          <div className="mt-4">
            <h4 className="font-medium text-gray-700 mb-2">Min. Relationship Strength</h4>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={minStrength}
                onChange={(e) => handleStrengthChange(parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-sm">{minStrength.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphControls;