// src/app/(DashboardLayout)/layout/vertical/sidebar/NavItems/index.tsx
'use client';
import React from 'react';
import { ChildItem } from '../Sidebaritems';
import { Sidebar } from 'flowbite-react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

interface NavItemsProps {
  item: ChildItem;
}

/**
 * NavItems component for rendering sidebar menu items
 * Includes role-based access control
 */
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const pathname = usePathname();
  const { hasRole } = useAuth();

  // Skip rendering if user doesn't have the required role
  if (item.roles && !hasRole(item.roles)) {
    return null;
  }

  // Create a custom icon component that meets Flowbite's requirements
  const CustomIcon = () => {
    return item.icon ? (
      <Icon icon={item.icon} className={`${item.color}`} height={18} />
    ) : (
      <span
        className={`${
          item.url == pathname
            ? 'dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary !bg-primary h-[6px] w-[6px]'
            : 'h-[6px] w-[6px] bg-darklink dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary'
        } `}
      ></span>
    );
  };

  return (
    <>
      <Sidebar.Item
        href={item.url}
        as={Link}
        target={item.isPro ? '_blank' : undefined}
        icon={CustomIcon}
        className={`${item.url == pathname ? '!text-primary bg-lightprimary ' : 'text-link bg-transparent group/link '} `}
      >
        <span className='max-w-36 overflow-hidden hide-menu flex-1'>{item.name}</span>
        {item.isPro ? <span className='py-1 px-2.5 text-[10px] bg-secondary text-white rounded-full'>Pro</span> : null}
      </Sidebar.Item>
    </>
  );
};

export default NavItems;
