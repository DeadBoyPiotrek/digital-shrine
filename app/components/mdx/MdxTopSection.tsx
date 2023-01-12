import Image from 'next/image';
import { dateToLongMonthFormat } from '../../../lib/helpers';
import styles from './MdxTopSection.module.scss';

import { PostProps } from '../../../types/types';

export const MdxTopSection = ({ post }: { post: PostProps }) => {
  return (
    <>
      <span className={styles.title}>
        <h1>{post.title}</h1>
      </span>
      <span className={styles.datePublished}>
        {dateToLongMonthFormat(post.datePublished)}
      </span>
      <div className={styles.image}>
        <Image
          src={post.img.url}
          width={960}
          height={540}
          alt=""
          quality={100}
        />
      </div>
    </>
  );
};
