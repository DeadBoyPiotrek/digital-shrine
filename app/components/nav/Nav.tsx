import { HamburgerNav } from './hamburgerNav/HamburgerNav';
import { Logo } from './logo/Logo';
import styles from './Nav.module.scss';
import { NavLinks } from './navLinks/NavLinks';
import { ThemeSwitcher } from './themeSwitcher/ThemeSwitcher';

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
