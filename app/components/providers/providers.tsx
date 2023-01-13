'use client';

import { ThemeProvider } from 'next-themes';
import { MobileNavSettingsProvider } from '../../context/mobileNavSettings';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MobileNavSettingsProvider>
      <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    </MobileNavSettingsProvider>
  );
}
