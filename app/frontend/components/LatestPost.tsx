import { PostProps } from '../../../types/types';
import styles from './LatestPost.module.scss';

export const LatestPost = ({
  title,
  content,
  date,
  img,
  dateCreated,
}: PostProps) => {
  console.log('img', img);
  console.log('date', date);
  return (
    <div className={styles.wrapper}>
      {title}
      <div>{content}</div>
      <div>{date}</div>
      {/* <div>{img.url}</div> */}
      <div>{dateCreated}</div>
    </div>
  );
};
