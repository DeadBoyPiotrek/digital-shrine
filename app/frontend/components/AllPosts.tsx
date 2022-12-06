import { AllPostsProps } from '../../../types/types';
import styles from './AllPosts.module.scss';
export const AllPosts = (posts: AllPostsProps) => {
  console.log(posts);
  return <div className={styles.wrapper}></div>;
};
