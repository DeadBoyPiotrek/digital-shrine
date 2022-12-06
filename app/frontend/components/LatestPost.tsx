import { PostProps } from '../../../types/types';
import styles from './LatestPost.module.scss';

export const LatestPost = ({
  title,
  content,
  date,
  imgURL,
  dateCreated,
}: PostProps) => {
  return (
    <div className={styles.wrapper}>
      {title}
      <div>{content}</div>
      <div>{date}</div>
      <div>{imgURL}</div>
      <div>{dateCreated}</div>
    </div>
  );
};
