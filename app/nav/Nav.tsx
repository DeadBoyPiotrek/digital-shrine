'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
export const Nav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <ul>
        <li>
          <Link href="/">DIGITAL SHRINE</Link>
        </li>
        <li>
          <Link href="/frontend">COOL FRONTEND</Link>
        </li>
        <li>
          <Link href="/backend">COOL BACKEND</Link>
        </li>
        <li>
          <Link href="/about-me">ABOUT ME</Link>
        </li>
        <li>
          <div>
            The current theme is: {theme}
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
