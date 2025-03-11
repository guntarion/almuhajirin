// src/app/(DashboardLayout)/layout/vertical/sidebar/NavCollapse/index.tsx
'use client';

import { Sidebar } from 'flowbite-react';
import React from 'react';
import { ChildItem } from '../Sidebaritems';
import NavItems from '../NavItems';
import { Icon } from '@iconify/react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

interface NavCollapseProps {
  item: ChildItem;
}

/**
 * Navigation collapse component that filters child items based on user role
 */
const NavCollapse: React.FC<NavCollapseProps> = ({ item }: any) => {
  const pathname = usePathname();
  const { hasRole } = useAuth();

  // Skip rendering if user doesn't have the required role
  if (item.roles && !hasRole(item.roles)) {
    return null;
  }

  // Filter children by user role
  const filteredChildren =
    item.children?.filter((child: any) => {
      if (!child.roles) return true;
      return hasRole(child.roles);
    }) || [];

  // Skip rendering if no accessible children
  if (filteredChildren.length === 0) {
    return null;
  }

  const activeDD = filteredChildren.find((t: { url: string }) => t.url === pathname);

  // Create a custom icon component that meets Flowbite's requirements
  const CustomIcon = () => {
    return <Icon icon={item.icon} height={18} />;
  };

  return (
    <>
      <Sidebar.Collapse
        label={item.name}
        open={activeDD ? true : false}
        icon={CustomIcon}
        className={`${activeDD ? '!text-primary bg-lightprimary ' : ''} collapse-menu`}
        renderChevronIcon={(theme, open) => {
          const IconComponent = open ? HiOutlineChevronDown : HiOutlineChevronDown;
          return (
            <div className='flex items-center'>
              <IconComponent aria-hidden className={`${twMerge(theme.label.icon.open[open ? 'on' : 'off'])} drop-icon order-3 text-base`} />
              {item.isPro ? <span className='py-1 px-2.5 text-[10px] bg-secondary text-white rounded-full order-0'>Pro</span> : null}
            </div>
          );
        }}
      >
        {/* Render child items */}
        {filteredChildren.length > 0 && (
          <Sidebar.ItemGroup className='sidebar-dropdown'>
            {filteredChildren.map((child: any) => (
              <React.Fragment key={child.id}>
                {/* Render NavItems for child items */}
                {child.children ? (
                  <NavCollapse item={child} /> // Recursive call for nested collapse
                ) : (
                  <NavItems item={child} />
                )}
              </React.Fragment>
            ))}
          </Sidebar.ItemGroup>
        )}
      </Sidebar.Collapse>
    </>
  );
};

export default NavCollapse;
