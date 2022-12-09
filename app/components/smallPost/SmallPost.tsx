import Image from 'next/image';
import Link from 'next/link';
import { dateToLongMonthFormat } from '../../../lib/helpers';
import { PostPreviewProps } from '../../../types/types';
import styles from './SmallPost.module.scss';
export const SmallPost = ({ post }: { post: PostPreviewProps }) => {
  return (
    <div className={styles.wrapper}>
      <Link href={`/frontend/${post.slug}`}>
        <div className={styles.image}>
          <Image src={post.img.url} alt={post.title} width={300} height={200} />
        </div>
        <div>{dateToLongMonthFormat(post.datePublished)}</div>
        <div className={styles.title}>
          <h3>{post.title}</h3>
        </div>
        <div className={styles.excerpt}>{<p>{post.excerpt}</p>}</div>
      </Link>
    </div>
  );
};
