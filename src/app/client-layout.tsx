'use client';

import React from 'react';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import customTheme from '@/utils/theme/custom-theme';
import { SessionProvider } from '@/providers/SessionProvider';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeModeScript />
      <SessionProvider>
        <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
      </SessionProvider>
    </>
  );
}
