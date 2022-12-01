// import { Section } from './components/section/Section';
import { SplineBg } from './components/SplineBg';
import styles from './page.module.scss';
const page = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.mainLeft}>
          <h1>
            <span className={styles.bold}>Hello</span> , and
            <span className={styles.bold}>welcome</span> to the
            <br />
            <span className={`${styles.bold} ${styles.blue}`}>
              Digital Shrine
            </span>
            .
            <br />
            Making <span className={styles.bold}>internet</span> <br />a
            <span className={styles.strikethrough}>worst</span> better <br />
            place since 2010.
          </h1>
          <h2></h2>
        </div>
        <div className={styles.mainRight}>
          <SplineBg />
        </div>
      </main>
    </div>
  );
};

export default page;
