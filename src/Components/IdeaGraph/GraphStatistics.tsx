'use client';

import { GraphData, RelationshipType } from '@/utils/ideaRelationshipUtils';
import { useMemo } from 'react';

interface GraphStatisticsProps {
  data: GraphData;
}

const GraphStatistics: React.FC<GraphStatisticsProps> = ({ data }) => {
  const statistics = useMemo(() => {
    if (!data || !data.nodes.length) {
      return {
        totalNodes: 0,
        totalLinks: 0,
        avgConnections: 0,
        mostConnectedNode: null,
        relationshipCounts: {},
        positionCounts: {},
      };
    }

    // Count connections per node
    const nodeConnections: Record<string, number> = {};
    data.nodes.forEach(node => {
      nodeConnections[node.id] = 0;
    });
    
    data.links.forEach(link => {
      const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
      const targetId = typeof link.target === 'string' ? link.target : link.target.id;
      
      nodeConnections[sourceId] = (nodeConnections[sourceId] || 0) + 1;
      nodeConnections[targetId] = (nodeConnections[targetId] || 0) + 1;
    });
    
    // Find most connected node
    let maxConnections = 0;
    let mostConnectedNodeId = '';
    
    Object.entries(nodeConnections).forEach(([id, count]) => {
      if (count > maxConnections) {
        maxConnections = count;
        mostConnectedNodeId = id;
      }
    });
    
    const mostConnectedNode = data.nodes.find(node => node.id === mostConnectedNodeId);
    
    // Count relationship types
    const relationshipCounts: Record<string, number> = {};
    data.links.forEach(link => {
      relationshipCounts[link.type] = (relationshipCounts[link.type] || 0) + 1;
    });
    
    // Count nodes by job position
    const positionCounts: Record<string, number> = {};
    data.nodes.forEach(node => {
      positionCounts[node.group] = (positionCounts[node.group] || 0) + 1;
    });
    
    // Calculate average connections per node
    const avgConnections = data.links.length * 2 / data.nodes.length;
    
    return {
      totalNodes: data.nodes.length,
      totalLinks: data.links.length,
      avgConnections,
      mostConnectedNode,
      relationshipCounts,
      positionCounts,
      maxConnections,
    };
  }, [data]);
  
  if (!data || !data.nodes.length) {
    return <div className="text-center p-4">No data available</div>;
  }
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Statistik Grafik</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/5 to-blue-500/10 p-4 rounded-lg border border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-200">
          <p className="text-sm text-blue-700 uppercase tracking-wide font-medium mb-1">Jumlah Ide</p>
          <p className="text-3xl font-bold text-blue-900">{statistics.totalNodes}</p>
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="group relative overflow-hidden bg-gradient-to-br from-green-500/5 to-green-500/10 p-4 rounded-lg border border-green-100 transition-all duration-300 hover:shadow-md hover:border-green-200">
          <p className="text-sm text-green-700 uppercase tracking-wide font-medium mb-1">Jumlah Hubungan</p>
          <p className="text-3xl font-bold text-green-900">{statistics.totalLinks}</p>
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/5 to-purple-500/10 p-4 rounded-lg border border-purple-100 transition-all duration-300 hover:shadow-md hover:border-purple-200">
          <p className="text-sm text-purple-700 uppercase tracking-wide font-medium mb-1">Rata-Rata Koneksi</p>
          <p className="text-3xl font-bold text-purple-900">{statistics.avgConnections.toFixed(1)}</p>
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      {statistics.mostConnectedNode && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
            Ide Paling Terhubung
          </h4>
          <div className="group relative overflow-hidden bg-gradient-to-br from-amber-500/5 to-amber-500/10 p-5 rounded-lg border border-amber-100 transition-all duration-300 hover:shadow-md hover:border-amber-200">
            <p className="font-semibold text-gray-900 text-lg mb-2">{statistics.mostConnectedNode.name}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">{statistics.mostConnectedNode.position}</p>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
                {statistics.maxConnections} koneksi
              </span>
            </div>
            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group bg-white p-5 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
            Jenis Hubungan
          </h4>
          <div className="space-y-3">
            {Object.entries(statistics.relationshipCounts).map(([type, count]) => (
              <div key={type} className="flex justify-between items-center group/item p-2 rounded-lg transition-colors duration-200 hover:bg-blue-50">
                <span className="text-gray-700 group-hover/item:text-blue-700 transition-colors duration-200">{type}</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">{count}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="group bg-white p-5 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-green-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>
            Ide berdasarkan Jabatan
          </h4>
          <div className="space-y-3">
            {Object.entries(statistics.positionCounts).map(([position, count]) => (
              <div key={position} className="flex justify-between items-center group/item p-2 rounded-lg transition-colors duration-200 hover:bg-green-50">
                <span className="text-gray-700 group-hover/item:text-green-700 transition-colors duration-200">{position}</span>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphStatistics;
