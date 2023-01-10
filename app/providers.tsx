'use client';

import { ThemeProvider } from 'next-themes';
import { SettingsProvider } from './context/settings';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    </SettingsProvider>
  );
}
