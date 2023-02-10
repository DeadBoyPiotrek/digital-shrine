'use client';
import { useMobileNavSettings } from '@/context/mobileNavSettings';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './HamburgerNav.module.scss';
export const HamburgerNav = () => {
  const { setIsOpen } = useMobileNavSettings();
  const openNavHandler = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  return (
    <li>
      <div className={styles.wrapper}>
        <button onClick={openNavHandler} aria-label={'open menu'}>
          <GiHamburgerMenu />
        </button>
      </div>
    </li>
  );
};
