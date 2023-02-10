import { SmallPost } from '@/components/smallPost/SmallPost';
import { removeFirstPost } from '@/lib/helpers';
import { PostPreviewProps } from '@/types/types';
import styles from './AllPosts.module.scss';
interface FrontendPostsData {
  frontendPostsData: PostPreviewProps[];
}

export const AllPosts = ({ frontendPostsData }: FrontendPostsData) => {
  const postsWithoutFirst = removeFirstPost(frontendPostsData);
  return (
    <div className={styles.wrapper}>
      {postsWithoutFirst.map(post => (
        <SmallPost key={post.id} post={post} />
      ))}
    </div>
  );
};
