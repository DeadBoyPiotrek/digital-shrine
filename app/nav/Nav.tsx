'use client';

import styles from './Nav.module.scss';
import { NavLinks } from './navLinks/NavLinks';
import { ThemeSwitcher } from './themeSwitcher/ThemeSwitcher';
export const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <NavLinks />
      <div className={styles.themeSwitcher}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
