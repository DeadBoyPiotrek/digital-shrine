import { PostPreviewProps } from '../types/types';
export const dateToLongMonthFormat = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const removeFirstPost = (
  posts: PostPreviewProps[]
): PostPreviewProps[] => {
  return posts.slice(1);
};
