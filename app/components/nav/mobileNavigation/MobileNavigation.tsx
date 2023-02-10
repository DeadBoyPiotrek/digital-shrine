'use client';
import { useMobileNavSettings } from '@/context/mobileNavSettings';
import { mobileNavigationLinks } from '@/lib/helpers';
import Link from 'next/link';
import styles from './MobileNavigation.module.scss';

export const MobileNavigation = () => {
  const { isOpen, setIsOpen } = useMobileNavSettings();

  const closeNavHandler = () => {
    document.body.style.overflow = 'unset';
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.wrapper} onClick={closeNavHandler}>
          <ul className={styles.nav}>
            {mobileNavigationLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeNavHandler}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
