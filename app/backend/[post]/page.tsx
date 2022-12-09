import { getSinglePost } from '../../../lib/hygraphHelpers';
const postPage = async ({ params }: { params: { post: string } }) => {
  const slug = params.post;
  const post = await getSinglePost(slug);
  console.log(`🚀 ~ postPage ~ post`, post);
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default postPage;
