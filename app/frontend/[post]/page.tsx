// import { MDXRemote } from 'next-mdx-remote';
// import { serialize } from 'next-mdx-remote/serialize';

import { getSinglePost } from '../../../lib/hygraphHelpers';
// const postPage = async ({ params }: { params: { post: string } }) => {
//   const slug = params.post;
//   const post = await getSinglePost(slug);
//   console.log(post.content);
//   const source = await serialize(post.content);
//   console.log(`🚀 ~ postPage ~ post`, post);
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <MDXRemote {...source} />
//     </div>
//   );
// };

// export default postPage;

// This is the wrapper component above.
import { serialize } from 'next-mdx-remote/serialize';
import MDXContent from '../../../lib/blogPostFix';
const postPage = async ({ params }: { params: { post: string } }) => {
  const post = await getSinglePost(params.post);
  const source = await serialize(post.content);
  return <MDXContent source={source} />;
};

export default postPage;
