'use client';
import Spline from '@splinetool/react-spline';

import styles from './SplineBg.module.scss';
export const SplineBg = () => {
  return (
    <div className={styles.wrapper}>
      <Spline scene="https://prod.spline.design/Asi8rpyNwVtZeHU2/scene.splinecode" />
    </div>
  );
};
