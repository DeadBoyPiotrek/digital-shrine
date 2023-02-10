// import { HamburgerNav } from './hamburgerNav/HamburgerNav';
import { ThemeSwitcher } from '@/components/nav//themeSwitcher/ThemeSwitcher';
import { HamburgerNav } from '@/components/nav/hamburgerNav/HamburgerNav';
import { NavLinks } from '@/components/nav/navLinks/NavLinks';
import { Logo } from './logo/Logo';
import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <Logo />
        <NavLinks />
        <HamburgerNav />
        <ThemeSwitcher />
      </ul>
    </nav>
  );
};
