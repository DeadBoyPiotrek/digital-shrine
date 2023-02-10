import { PostPreviewProps } from '@/types/types';
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

export const mobileNavigationLinks = [
  {
    href: '/',
    label: 'Main page',
  },
  {
    href: '/frontend',
    label: 'Frontend',
  },
  {
    href: '/backend',
    label: 'Backend',
  },
  {
    href: '/about-me',
    label: 'About',
  },
];
