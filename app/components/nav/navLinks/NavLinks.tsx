import Link from 'next/link';
import styles from './NavLinks.module.scss';
export const NavLinks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="/" className={styles.actualLink}>
          <div data-replace="digital-shrine.dev" className={styles.link}>
            <span>digital-shrine.dev</span>
          </div>
        </Link>
      </li>

      <li className={styles.listItem}>
        <Link href="/frontend" className={styles.actualLink}>
          <div data-replace="Frontend" className={styles.link}>
            <span>Frontend</span>
          </div>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/backend">
          <div data-replace="Backend" className={styles.link}>
            <span>Backend</span>
          </div>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/about-me">
          <div data-replace="About" className={styles.link}>
            <span>About</span>
          </div>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/testPage">
          <div data-replace="About" className={styles.link}>
            <span>test</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};
