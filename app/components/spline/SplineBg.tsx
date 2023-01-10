'use client';

import { lazy, Suspense } from 'react';

import styles from './SplineBg.module.scss';

const Spline = lazy(() => import('@splinetool/react-spline'));
export const SplineBg = () => {
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<></>}>
        {/* <Spline scene="https://prod.spline.design/Asi8rpyNwVtZeHU2/scene.splinecode" /> */}
      </Suspense>
    </div>
  );
};
