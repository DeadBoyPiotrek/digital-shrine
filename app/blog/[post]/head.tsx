import { getSinglePost } from '../../../lib/hygraphHelpers';

export default async function Head({ params }: { params: { post: string } }) {
  const post = await getSinglePost(params.post);

  return (
    <>
      <title>{post?.title}</title>
    </>
  );
}
