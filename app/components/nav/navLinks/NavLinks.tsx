import { mobileNavigationLinks } from '@/lib/helpers';
import Link from 'next/link';
import styles from './NavLinks.module.scss';

const navigationLinks = mobileNavigationLinks.slice(1);

export const NavLinks = () => {
  return (
    <>
      {navigationLinks.map(link => (
        <li className={styles.listItem} key={link.href}>
          <Link href={link.href}>
            <div className={styles.link}>
              <span className={styles.main}>{link.label}</span>
              <span aria-hidden="true" className={styles.second}>
                {link.label}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};
