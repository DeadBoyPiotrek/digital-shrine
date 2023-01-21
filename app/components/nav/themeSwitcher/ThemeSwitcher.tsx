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
        <button
          onClick={setThemeHandler}
          className={styles.button}
          aria-label={'theme switcher'}
        >
          <div className={styles.main}>
            {theme === 'light' ? (
              <HiOutlineMoon data-testid="moon-icon" />
            ) : (
              <HiOutlineSun data-testid="sun-icon" />
            )}
          </div>
          <div className={styles.second}>
            {theme === 'dark' ? (
              <HiOutlineMoon data-testid="moon-icon" />
            ) : (
              <HiOutlineSun data-testid="sun-icon" />
            )}
          </div>
        </button>
      </div>
    </li>
  );
};
