import { dateToLongMonthFormat } from '@/lib/helpers';
import { PostPreviewProps } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LatestPost.module.scss';

interface Props {
  latestPostData: PostPreviewProps;
}

export const LatestPost = ({
  latestPostData: { slug, img, title, datePublished, excerpt },
}: Props) => {
  return (
    <article>
      <div className={styles.wrapper}>
        <Link href={`/blog/${slug}`}>
          <div className={styles.image}>
            <Image
              src={img.url}
              alt={title}
              width={img.width}
              height={img.height}
              quality={100}
            />
          </div>
          <div className={styles.text}>
            <time className={styles.datePublished}>
              {dateToLongMonthFormat(datePublished)}
            </time>
            <span className={styles.title}>
              <h2>{title}</h2>
            </span>
            <span className={styles.excerpt}>{<p>{excerpt}</p>}</span>
          </div>
        </Link>
      </div>
    </article>
  );
};
