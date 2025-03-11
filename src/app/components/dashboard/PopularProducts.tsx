// src/app/components/dashboard/InovasiPopuler.tsx
'use client';
import React from 'react';
import { Badge, Dropdown, Progress } from 'flowbite-react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Icon } from '@iconify/react';
import { Table } from 'flowbite-react';

import Image from 'next/image';
import SimpleBar from 'simplebar-react';

/**
 * Komponen InovasiPopuler
 *
 * Menampilkan daftar ide-ide inovasi populer dalam format tabel
 * dengan informasi tentang status penilaian, progress implementasi,
 * dan opsi tindakan untuk setiap ide inovasi.
 */
const InovasiPopuler = () => {
  // Data ide inovasi yang akan ditampilkan dalam tabel
  const InovasiTableData = [
    {
      icon: 'solar:energy-bold-duotone',
      iconBg: 'bg-primary',
      name: 'Sistem Penyimpanan Energi Baterai Skala Utilitas dengan AI Management',
      penggagas: 'Nina Kusumawardani',
      progress: 100,
      progresscolor: 'bg-success',
      statuscolor: 'success',
      statustext: 'Lolos Nasional',
    },
    {
      icon: 'solar:smart-home-bold-duotone',
      iconBg: 'bg-secondary',
      name: 'Digital Twin untuk Optimasi Proses dan Simulasi Kilang Minyak',
      penggagas: 'Budi Setiawan',
      progress: 85,
      progresscolor: 'bg-success',
      statuscolor: 'success',
      statustext: 'Lolos Nasional',
    },
    {
      icon: 'solar:settings-bold-duotone',
      iconBg: 'bg-error',
      name: 'Sistem Prediktif Maintenance Turbin Gas Berbasis IoT dan Machine Learning',
      penggagas: 'Arief Wicaksono',
      progress: 50,
      progresscolor: 'bg-warning',
      statuscolor: 'secondary',
      statustext: 'Perlu Upgrade',
    },
    {
      icon: 'solar:plane-bold-duotone',
      iconBg: 'bg-success',
      name: 'Sistem Inspeksi Pipeline Otomatis Menggunakan Drone dan AI',
      penggagas: 'Hendra Gunawan',
      progress: 75,
      progresscolor: 'bg-warning',
      statuscolor: 'secondary',
      statustext: 'Perlu Upgrade',
    },
    {
      icon: 'solar:sun-bold-duotone',
      iconBg: 'bg-info',
      name: 'Sistem Prediksi Produksi Energi Solar Berbasis AI dan Citra Satelit',
      penggagas: 'Rini Widyastuti',
      progress: 100,
      progresscolor: 'bg-success',
      statuscolor: 'success',
      statustext: 'Lolos Nasional',
    },
  ];

  /* Opsi tindakan untuk tabel */
  const tableActionData = [
    {
      icon: 'solar:eye-bold',
      listtitle: 'Lihat Detail',
    },
    {
      icon: 'solar:pen-new-square-broken',
      listtitle: 'Edit',
    },
    {
      icon: 'solar:bookmark-square-bold',
      listtitle: 'Arsipkan',
    },
  ];

  return (
    <>
      <div className='rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray py-6 px-0 relative w-full break-words'>
        <div className='px-6'>
          <h5 className='card-title'>Inovasi Populer</h5>
          <p className='card-subtitle'>Total 125 Karya Inovasi</p>
        </div>
        <SimpleBar className='max-h-[450px]'>
          <div className='overflow-x-auto'>
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className='p-6'>Karya Inovasi</Table.HeadCell>
                <Table.HeadCell>Progress Implementasi</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Head>
              <Table.Body className='divide-y divide-border dark:divide-darkborder '>
                {InovasiTableData.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className='whitespace-nowrap ps-6'>
                      <div className='flex gap-3 items-center'>
                        <div className={`h-[60px] w-[60px] rounded-md flex items-center justify-center ${item.iconBg} text-white`}>
                          <Icon icon={item.icon} width={30} height={30} />
                        </div>
                        <div className='truncate line-clamp-2 sm:text-wrap max-w-56'>
                          <h6 className='text-sm'>{item.name}</h6>
                          <p className='text-xs text-dark opacity-70 mt-1'>{item.penggagas}</p>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <h5 className='text-base text-wrap'>
                        {item.progress}%
                        <span className='text-dark opacity-70'>
                          <span className='mx-1'>/</span>100%
                        </span>
                      </h5>
                      <div className='text-sm font-medium text-dark opacity-70 mb-2 text-wrap'>
                        {item.progress < 60 ? 'Dalam Pengembangan' : item.progress < 90 ? 'Hampir Selesai' : 'Implementasi Penuh'}
                      </div>
                      <div className='me-5'>
                        <Progress progress={item.progress} color={`${item.progresscolor}`} className={`${item.progresscolor}`} size={'sm'} />
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge color={`light${item.statuscolor}`} className={`text-${item.statuscolor}`}>
                        {item.statustext}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <Dropdown
                        label=''
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className='h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer'>
                            <HiOutlineDotsVertical size={22} />
                          </span>
                        )}
                      >
                        {tableActionData.map((items, index) => (
                          <Dropdown.Item key={index} className='flex gap-3'>
                            <Icon icon={`${items.icon}`} height={18} />
                            <span>{items.listtitle}</span>
                          </Dropdown.Item>
                        ))}
                      </Dropdown>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </SimpleBar>
      </div>
    </>
  );
};

export default InovasiPopuler;
