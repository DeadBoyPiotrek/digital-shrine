import Image from 'next/image';
import Link from 'next/link';
import { dateToLongMonthFormat } from '../../../lib/helpers';
import { PostProps } from '../../../types/types';
import styles from './LatestPost.module.scss';
export const LatestPost = ({
  latestPostData: { title, excerpt, datePublished, img, slug },
}: {
  latestPostData: PostProps;
}) => {
  return (
    <Link href={`/frontend/${slug}`}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={img.url} alt={title} width={600} height={400} />
        </div>
        <div className={styles.text}>
          <div className={styles.datePublished}>
            {dateToLongMonthFormat(datePublished)}
          </div>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          <div className={styles.excerpt}>{<p>{excerpt}</p>}</div>
        </div>
      </div>
    </Link>
  );
};
