'use client';
import Link from 'next/link';
import { useMobileNavSettings } from '../../../context/mobileNavSettings';
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
          <ul className={styles.nav} onClick={e => e.stopPropagation()}>
            <li>
              <span className={styles.dot}></span>
              <Link href={'./'} onClick={closeNavHandler}>
                Main page
              </Link>
            </li>
            <li>
              <span className={styles.dot}></span>
              <Link href={'./frontend'} onClick={closeNavHandler}>
                Frontend
              </Link>
            </li>
            <li>
              <span className={styles.dot}></span>
              <Link href={'./backend'} onClick={closeNavHandler}>
                Backend
              </Link>
            </li>
            <li>
              <span className={styles.dot}></span>
              <Link href={'./about-me'} onClick={closeNavHandler}>
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
