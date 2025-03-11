// src/app/(DashboardLayout)/layout/vertical/sidebar/NavItems/RoleAwareNavItem.tsx
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
 * NavItem component that checks user role before rendering
 * Only displays menu items that the user has access to
 */
const RoleAwareNavItem: React.FC<NavItemsProps> = ({ item }) => {
  const pathname = usePathname();
  const { hasRole } = useAuth();

  // If the item has roles specified, check if user has access
  if (item.roles && !hasRole(item.roles)) {
    return null; // Don't render this item if user doesn't have required role
  }

  return (
    <>
      <Sidebar.Item
        href={item.url}
        as={Link}
        target={item.isPro ? '_blank' : undefined}
        className={`${item.url == pathname ? '!text-primary bg-lightprimary ' : 'text-link bg-transparent group/link '} `}
      >
        <span className='flex gap-3 align-center items-center truncate'>
          {item.icon ? (
            <Icon icon={item.icon} className={`${item.color}`} height={18} />
          ) : (
            <span
              className={`${
                item.url == pathname
                  ? 'dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary !bg-primary h-[6px] w-[6px]'
                  : 'h-[6px] w-[6px] bg-darklink dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary'
              } `}
            ></span>
          )}
          <span className='max-w-36 overflow-hidden hide-menu flex-1'>{item.name}</span>
          {item.isPro ? <span className='py-1 px-2.5 text-[10px] bg-secondary text-white rounded-full'>Pro</span> : null}
        </span>
      </Sidebar.Item>
    </>
  );
};

export default RoleAwareNavItem;
