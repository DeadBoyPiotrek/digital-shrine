'use client';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSettings } from '../../../context/settings';
import styles from './HamburgerNav.module.scss';
export const HamburgerNav = () => {
  const { setIsOpen } = useSettings();
  const openNavHandler = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={openNavHandler}>
        <GiHamburgerMenu />
      </button>
    </div>
  );
};
