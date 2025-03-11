// src/app/components/dashboard/LaporanInovasi.tsx
'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import { Badge, Dropdown } from 'flowbite-react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import Link from 'next/link';

/**
 * Komponen LaporanInovasi
 *
 * Menampilkan statistik dan tren inovasi dalam organisasi,
 * seperti pertumbuhan ide, tingkat implementasi, dan nilai tambah
 * untuk berbagai kategori inovasi.
 */
const LaporanInovasi = () => {
  // Opsi dropdown untuk tindakan pada komponen
  const dropdownItems = ['Cetak Laporan', 'Export ke Excel', 'Lihat Detail'];

  // Data statistik inovasi untuk ditampilkan
  const LaporanInovasiData = [
    {
      icon: 'solar:lightbulb-bold-duotone',
      title: 'Pertumbuhan Ide',
      subtitle: 'vs bulan lalu',
      color: 'bg-lightprimary',
      text: 'text-primary',
      statuscolor: 'success',
      statustext: '32.7%',
    },
    {
      icon: 'solar:rocket-bold-duotone',
      title: 'Tingkat Implementasi',
      subtitle: 'dari total usulan',
      color: 'bg-lightsecondary',
      text: 'text-secondary',
      statuscolor: 'success',
      statustext: '24.8%',
    },
    {
      icon: 'solar:lightbulb-bold-duotone',
      title: 'Sertifikasi Inovator',
      subtitle: 'pencapaian Q1',
      color: 'bg-lightsuccess',
      text: 'text-success',
      statuscolor: 'success',
      statustext: '18.3%',
    },
    {
      icon: 'solar:file-text-bold-duotone',
      title: 'Dokumentasi Knowledge',
      subtitle: 'vs target tahunan',
      color: 'bg-lightwarning',
      text: 'text-warning',
      statuscolor: 'warning',
      statustext: '76.5%',
    },
    {
      icon: 'solar:dollar-minimalistic-bold-duotone',
      title: 'Nilai Ekonomi Inovasi',
      subtitle: 'proyeksi tahun ini',
      color: 'bg-lighterror',
      text: 'text-error',
      statuscolor: 'error',
      statustext: '↓ 8.2%',
    },
  ];

  return (
    <>
      <div className='rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words'>
        <div className='flex items-center justify-between'>
          <h5 className='card-title'>Laporan Inovasi</h5>
          <Dropdown
            label=''
            dismissOnClick={false}
            renderTrigger={() => (
              <span className='h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer'>
                <HiOutlineDotsVertical size={22} />
              </span>
            )}
          >
            {dropdownItems.map((items, index) => {
              return <Dropdown.Item key={index}>{items}</Dropdown.Item>;
            })}
          </Dropdown>
        </div>

        <div className='flex flex-col mt-2'>
          {LaporanInovasiData.map((item, index) => (
            <div className='flex items-center justify-between py-5 border-b border-ld' key={index}>
              <div className='flex gap-3 items-center'>
                <span className={`w-14 h-10 rounded-full flex items-center justify-center ${item.color} ${item.text}`}>
                  <Icon icon={item.icon} height={24} />
                </span>
                <div>
                  <h4 className='text-sm mb-1'>{item.title}</h4>
                  <p className='text-darklink text-xs flex items-center gap-1'>
                    {item.subtitle} <Icon icon='material-symbols:info-outline-rounded' height={13}></Icon>
                  </p>
                </div>
              </div>
              <Badge
                color={`light${item.statuscolor}`}
                icon={() =>
                  item.statustext.includes('↓') ? (
                    <Icon icon='solar:alt-arrow-down-bold' className='me-1' height={12} />
                  ) : (
                    <Icon icon='solar:alt-arrow-up-bold' className='me-1' height={12} />
                  )
                }
                className={`bg-light${item.statuscolor} text-${item.statuscolor}`}
              >
                {item.statustext.replace('↓', '')}
              </Badge>
            </div>
          ))}

          <Link
            href={'/inovasi/statistik'}
            className='text-base text-dark text-center pt-6 font-semibold text-dark hover:text-primary dark:hover:text-primary'
          >
            Lihat semua statistik
          </Link>
        </div>
      </div>
    </>
  );
};

export default LaporanInovasi;
