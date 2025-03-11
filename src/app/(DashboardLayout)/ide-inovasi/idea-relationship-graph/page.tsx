'use client';

import { useEffect, useState, useMemo } from 'react';
import { contohIdeInovasiList } from '@/Data/IdeInovasi/contohIdeInovasi';
import { generateGraphData, GraphData, Node, RelationshipType } from '@/utils/ideaRelationshipUtils';
import ForceGraph from '@/Components/IdeaGraph/ForceGraph';
import GraphControls from '@/Components/IdeaGraph/GraphControls';
import GraphStatistics from '@/Components/IdeaGraph/GraphStatistics';
import IdeaDetails from '@/Components/IdeaGraph/IdeaDetails';

export default function IdeaRelationshipGraphPage() {
  const [originalGraphData, setOriginalGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const [filteredGraphData, setFilteredGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Get all unique job positions
  const jobPositions = useMemo(() => {
    const positions = contohIdeInovasiList.map((idea) => idea.profilIde?.posisiJabatan || 'Unknown');
    return Array.from(new Set(positions));
  }, []);

  // Initialize graph data when component mounts
  useEffect(() => {
    setIsLoading(true);

    // Generate graph data from the idea list
    const graphData = generateGraphData(contohIdeInovasiList);

    setOriginalGraphData(graphData);
    setFilteredGraphData(graphData);
    setIsLoading(false);
  }, []);

  // Update dimensions on window resize
  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
        setDimensions({
          width: window.innerWidth * 0.85,
          height: window.innerHeight * 0.7,
        });
      }
    }

    // Set initial dimensions
    handleResize();

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    // Clean up
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Handle filter changes
  const handleFilterChange = (filters: { positions: string[]; relationshipTypes: RelationshipType[]; minStrength: number }) => {
    const { positions, relationshipTypes, minStrength } = filters;

    // Filter nodes by position
    const filteredNodes = originalGraphData.nodes.filter((node) => positions.includes(node.group));

    // Get filtered node IDs for link filtering
    const filteredNodeIds = filteredNodes.map((node) => node.id);

    // Filter links by node inclusion, relationship type, and strength
    const filteredLinks = originalGraphData.links.filter(
      (link) =>
        filteredNodeIds.includes(link.source as string) &&
        filteredNodeIds.includes(link.target as string) &&
        relationshipTypes.includes(link.type) &&
        link.value >= minStrength
    );

    setFilteredGraphData({ nodes: filteredNodes, links: filteredLinks });
  };

  // Handle node clicks
  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
  };

  // Close node details panel
  const closeDetails = () => {
    setSelectedNode(null);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-3'>Grafik Hubungan Ide Inovasi</h1>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200 mb-5'>
          <h2 className='text-xl font-semibold text-blue-800 mb-3'>Cara Memahami Grafik Hubungan Ide</h2>
          <div className='space-y-3 text-gray-700'>
            <p>
              Grafik ini menunjukkan hubungan antar ide inovasi dari berbagai jabatan dan domain kerja. Berikut adalah panduan untuk memahami dan
              menggunakan grafik ini:
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
              <div className='bg-white p-3 rounded shadow-sm border border-blue-100'>
                <h3 className='font-medium text-blue-700 mb-2'>Elemen Grafik</h3>
                <ul className='list-disc pl-5 space-y-1 text-sm'>
                  <li>
                    <span className='font-medium'>Lingkaran (Node)</span>: Mewakili ide inovasi. Ukuran lingkaran menunjukkan seberapa banyak manfaat
                    dari ide tersebut.
                  </li>
                  <li>
                    <span className='font-medium'>Warna Node</span>: Menunjukkan jabatan/posisi penggagas ide.
                  </li>
                  <li>
                    <span className='font-medium'>Garis (Edge)</span>: Menunjukkan hubungan antar ide. Warna garis menunjukkan jenis hubungan.
                  </li>
                  <li>
                    <span className='font-medium'>Jarak antar Node</span>: Semakin dekat = semakin kuat hubungannya.
                  </li>
                </ul>
              </div>

              <div className='bg-white p-3 rounded shadow-sm border border-blue-100'>
                <h3 className='font-medium text-blue-700 mb-2'>Jenis Hubungan</h3>
                <ul className='list-disc pl-5 space-y-1 text-sm'>
                  <li>
                    <span className='font-medium'>Teknologi Serupa</span>: Ide-ide yang menggunakan teknologi yang sama atau mirip.
                  </li>
                  <li>
                    <span className='font-medium'>Masalah Serupa</span>: Ide-ide yang mengatasi permasalahan yang sama atau mirip.
                  </li>
                  <li>
                    <span className='font-medium'>Saling Melengkapi</span>: Ide-ide yang dapat bekerja bersama untuk solusi yang lebih lengkap.
                  </li>
                  <li>
                    <span className='font-medium'>Overlap Domain</span>: Ide-ide dari domain bisnis/bidang pekerjaan yang sama.
                  </li>
                  <li>
                    <span className='font-medium'>Potensi Integrasi</span>: Ide-ide yang berpotensi diintegrasikan menjadi satu solusi.
                  </li>
                </ul>
              </div>
            </div>

            <div className='bg-white p-3 rounded shadow-sm border border-blue-100 mt-2'>
              <h3 className='font-medium text-blue-700 mb-2'>Cara Menggunakan Grafik</h3>
              <ul className='list-disc pl-5 space-y-1 text-sm'>
                <li>
                  <span className='font-medium'>Geser & Zoom</span>: Klik dan seret untuk memindahkan grafik. Gunakan scroll untuk
                  memperbesar/memperkecil.
                </li>
                <li>
                  <span className='font-medium'>Interaksi Node</span>: Arahkan kursor ke node untuk melihat informasi singkat. Klik node untuk melihat
                  detail lengkap.
                </li>
                <li>
                  <span className='font-medium'>Filter</span>: Gunakan kontrol di atas grafik untuk memfilter berdasarkan jabatan, jenis hubungan,
                  atau kekuatan hubungan.
                </li>
                <li>
                  <span className='font-medium'>Analisis</span>: Perhatikan ide-ide yang memiliki banyak koneksi, ini mungkin ide yang paling
                  berpengaruh atau berpotensi untuk dikembangkan.
                </li>
                <li>
                  <span className='font-medium'>Temukan Peluang</span>: Cari hubungan "Saling Melengkapi" atau "Potensi Integrasi" untuk menemukan
                  peluang kolaborasi antar ide.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='text-center'>
            <div className='inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-2'></div>
            <p>Memuat data grafik...</p>
          </div>
        </div>
      ) : (
        <div className='space-y-6'>
          {/* Main Graph Section */}
          <div className='w-full'>
            <div className='mb-4'>
              <GraphControls jobPositions={jobPositions} onFilterChange={handleFilterChange} />
            </div>

            <div className='bg-white rounded-lg shadow overflow-hidden' style={{ height: '70vh' }}>
              <ForceGraph data={filteredGraphData} width={dimensions.width * 0.9} height={dimensions.height} onNodeClick={handleNodeClick} />
            </div>
          </div>

          {/* Statistics Section Below */}
          <div className='w-full'>
            <GraphStatistics data={filteredGraphData} />
          </div>

          {/* Modal for Idea Details */}
          {selectedNode && <IdeaDetails selectedNode={selectedNode} onClose={closeDetails} />}
        </div>
      )}
    </div>
  );
}
