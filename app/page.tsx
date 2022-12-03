import { SplineBg } from './components/SplineBg';
import styles from './page.module.scss';
const page = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.mainRight}>
          <h1>
            Making <span className={styles.bold}>internet</span> <br />a{' '}
            <span className={styles.strikethrough}>worst</span> better <br />
            place since 2012.
            <br />
            <span className={styles.bold}>Hello</span>, and {''}
            <span className={styles.bold}>welcome</span> to the
            <br />
            <span className={`${styles.bold} ${styles.blue}`}>
              Digital Shrine
            </span>
            .
            <br />
          </h1>
          <h2>
            <span className={`${styles.blue} ${styles.bold}`}>
              Digital Shrine
            </span>{' '}
            is all about creating{' '}
            <span className={styles.red}>cool things.</span>
            <br />
            Take a look at
            <span className={styles.bold}> Frontend </span>
            and<span className={styles.bold}> Backend </span>
            pages. <br />
            Who knows, maybe you'll even like something.
          </h2>
          <SplineBg />
        </div>
      </main>
    </div>
  );
};

export default page;
