import { getLatestPostPreview } from '../lib/hygraphHelpers';
import { LatestPost } from './components/latestPost/LatestPost';
import { SplineBg } from './components/spline/SplineBg';
import styles from './page.module.scss';
const indexPage = async () => {
  const post = await getLatestPostPreview();

  if (!post) {
    return <div>Error loading latest Post 😓</div>;
  }

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.welcomeSection}>
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
            is a <span className={styles.red}>blog </span>
            I guess?
            <br />
            Take a look at
            <span className={styles.bold}> Frontend </span>
            and<span className={styles.bold}> Backend </span>
            pages. <br />
            Who knows, maybe you&apos;ll even like something.
          </h2>
        </div>
        <div className={styles.spline}>
          <SplineBg />
        </div>
        <div className={styles.latestPost}>
          <LatestPost latestPostData={post} />
        </div>
      </main>
    </div>
  );
};

export default indexPage;
