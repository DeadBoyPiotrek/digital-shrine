import Image from 'next/image';
import Link from 'next/link';
import { dateToLongMonthFormat } from '../../../lib/helpers';
import { PostPreviewProps } from '../../../types/types';
import styles from './SmallPost.module.scss';

interface Props {
  post: PostPreviewProps;
}

export const SmallPost = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            src={post.img.url}
            alt={post.title}
            width={960}
            height={540}
            quality={100}
          />
        </div>

        <span>{dateToLongMonthFormat(post.datePublished)}</span>
        <span className={styles.title}>
          <h3>{post.title}</h3>
        </span>
        <span className={styles.excerpt}>{<p>{post.excerpt}</p>}</span>
      </div>
    </Link>
  );
};
