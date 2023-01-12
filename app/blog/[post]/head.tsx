import { getSinglePost } from '../../../lib/hygraphHelpers';

export default async function Head({ params }: { params: { post: string } }) {
  const post = await getSinglePost(params.post);
  if (!post) {
    throw new Error('post in head is undefined !!!');
  }
  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
    </>
  );
}
