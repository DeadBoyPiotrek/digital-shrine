import { PostPreviewProps } from '../../../types/types';
import { SmallPost } from '../smallPost/SmallPost';
import styles from './AllPosts.module.scss';
export const AllPosts = ({
  frontendPostsData,
}: {
  frontendPostsData: PostPreviewProps[];
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
