import Link from 'next/link';

import styles from './NavLinks.module.scss';
export const NavLinks = () => {
  return (
    <>
      <li className={styles.listItem}>
        <Link href="/frontend">
          <div className={styles.link}>
            <span className={styles.main}>Frontend</span>
            <span className={styles.second}>Frontend</span>
          </div>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/backend">
          <div className={styles.link}>
            <span className={styles.main}>Backend</span>
            <span className={styles.second}>Backend</span>
          </div>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/about-me">
          <div className={styles.link}>
            <span className={styles.main}>About</span>
            <span className={styles.second}>About</span>
          </div>
        </Link>
      </li>
    </>
  );
};
