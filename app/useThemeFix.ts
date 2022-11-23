//! temporary fix for next-themes with next 13 😓

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function useToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [themeValue, setThemeValue] = useState<string>();

  useEffect(() => setThemeValue(theme), [theme]);

  return { theme: themeValue, setTheme };
}
