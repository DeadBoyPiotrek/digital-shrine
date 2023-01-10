import Link from 'next/link';
import styles from './Logo.module.scss';
export const Logo = () => {
  return (
    <li className={styles.wrapper}>
      <Link href="/">
        <div className={`${styles.link} ${styles.logo}`}>
          <span className={styles.main}>digital-shrine.dev</span>
          <span className={styles.second}>digital-shrine.dev</span>
        </div>
      </Link>
    </li>
  );
};
