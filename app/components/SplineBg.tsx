'use client';
import Spline from '@splinetool/react-spline';
// import useToggleTheme from '../useThemeFix';
import styles from './SplineBg.module.scss';
export const SplineBg = () => {
  // const { theme } = useToggleTheme();

  return (
    <div className={styles.wrapper}>
      <Spline scene="https://prod.spline.design/Asi8rpyNwVtZeHU2/scene.splinecode" />
    </div>
  );
};
