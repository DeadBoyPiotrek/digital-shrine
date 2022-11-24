import Link from 'next/link';
import styles from './NavLinks.module.scss';
export const NavLinks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="/">
          <div data-replace="DIGITAL SHRINE" className={styles.link}>
            <span>DIGITAL SHRINE</span>
          </div>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/frontend">
          <div data-replace="COOL FRONTEND" className={styles.link}>
            <span>COOL FRONTEND</span>
          </div>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/backend">
          <div data-replace="COOL BACKEND" className={styles.link}>
            <span>COOL BACKEND</span>
          </div>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/about-me">
          <div data-replace="ABOUT ME" className={styles.link}>
            <span>ABOUT ME</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};
