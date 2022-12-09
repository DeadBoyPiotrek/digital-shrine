// quick fix for blog posts 😓 https://github.com/hashicorp/next-mdx-remote/issues/307

'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

interface MDXContentProps {
  source: MDXRemoteProps;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} />;
}
