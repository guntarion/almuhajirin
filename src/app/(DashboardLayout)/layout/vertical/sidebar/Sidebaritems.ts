// src/app/(DashboardLayout)/layout/vertical/sidebar/Sidebaritems.ts
import { uniqueId } from 'lodash';

export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  isPro?: boolean;
  roles?: string[]; // Add roles property
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
  isPro?: boolean;
  roles?: string[]; // Add roles property
}

/**
 * Sidebar menu items with role-based access control
 * Each item can specify which roles can access it
 */
const SidebarContent: MenuItem[] = [
  {
    isPro: true,
    heading: 'Dashboards',
    children: [
      {
        name: 'Dashboard',
        icon: 'solar:widget-add-line-duotone',
        id: uniqueId(),
        url: '/',
        isPro: false,
        roles: ['guest', 'member', 'moderator', 'editor', 'viewer', 'admin'], // All roles can see dashboard
      },

      // {
      //   name: 'Front Pages',
      //   id: uniqueId(),
      //   isPro: false,
      //   icon: 'solar:home-angle-linear',
      //   children: [
      //     {
      //       name: 'Sample Page',
      //       id: uniqueId(),
      //       url: '/sample-page',
      //       isPro: false,
      //     },
      //     {
      //       name: 'Qwen AI',
      //       id: uniqueId(),
      //       url: '/testing-page/qwen-ai',
      //       isPro: false,
      //     },
      //     {
      //       name: 'Anthropic AI',
      //       id: uniqueId(),
      //       url: '/testing-page/anthropic-ai',
      //       isPro: false,
      //     },
      //   ],
      // },
    ],
  },
  {
    isPro: false,
    heading: 'Ranah Ide',
    children: [
      {
        name: 'Kelola Ide',
        id: uniqueId(),
        isPro: false,
        icon: 'solar:battery-full-minimalistic-line-duotone',
        roles: ['member', 'moderator', 'editor', 'admin'], // Only these roles can see this
        children: [
          {
            id: uniqueId(),
            name: 'Doa Generator',
            url: '/doa-generator',
            isPro: false,
            roles: ['member', 'moderator', 'editor', 'admin'],
          },
          {
            id: uniqueId(),
            name: 'Graph',
            url: '/ide-inovasi/idea-relationship-graph',
            isPro: false,
            roles: ['moderator', 'editor', 'admin'],
          },
        ],
      },
    ],
  },
  {
    heading: '',
    isPro: false,
    roles: ['admin'], // Only admin can see this section
    children: [
      {
        name: 'User Management',
        icon: 'solar:users-group-rounded-outline',
        id: uniqueId(),
        url: '/users',
        isPro: false,
        roles: ['admin'],
      },
      {
        name: 'Sample Page',
        icon: 'solar:notes-minimalistic-outline',
        id: uniqueId(),
        url: '/sample-page',
        isPro: false,
        roles: ['admin', 'editor'],
      },
    ],
  },
];

export default SidebarContent;
