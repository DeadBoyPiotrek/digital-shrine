'use client';
import { motion } from 'framer-motion';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import useToggleTheme from '../../../../lib/useThemeFix';
import styles from './ThemeSwitcher.module.scss';
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useToggleTheme();
  const setThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className={styles.wrapper}>
      <motion.button
        whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
        onClick={setThemeHandler}
      >
        {theme === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />}
      </motion.button>
    </div>
  );
};
