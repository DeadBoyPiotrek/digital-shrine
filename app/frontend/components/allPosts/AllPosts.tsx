import { AllPostsProps } from '../../../../types/types';
import styles from './AllPosts.module.scss';
import { SmallPost } from './smallPost/SmallPost';
export const AllPosts = ({
  frontendPostsData,
}: {
  frontendPostsData: AllPostsProps;
}) => {
  const [, ...postsWithoutFirst] = frontendPostsData;
  return (
    <div className={styles.wrapper}>
      {postsWithoutFirst.map(post => (
        <SmallPost key={post.id} post={post} />
      ))}
    </div>
  );
};
