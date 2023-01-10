'use client';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import useToggleTheme from '../../../../lib/useThemeFix';
import styles from './ThemeSwitcher.module.scss';
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useToggleTheme();
  const setThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <li>
      <div className={styles.wrapper}>
        <button onClick={setThemeHandler} className={styles.button}>
          <div className={styles.main}>
            {theme === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />}
          </div>
          <div className={styles.second}>
            {theme === 'dark' ? <HiOutlineMoon /> : <HiOutlineSun />}
          </div>
        </button>
      </div>
    </li>
  );
};
