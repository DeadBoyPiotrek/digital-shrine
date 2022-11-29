import { motion } from 'framer-motion';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import useToggleTheme from '../../useThemeFix';
import styles from './ThemeSwitcher.module.scss';
('use client');
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
        {theme === 'light' ? <HiOutlineSun /> : <HiOutlineMoon />}
      </motion.button>
    </div>
  );
};
