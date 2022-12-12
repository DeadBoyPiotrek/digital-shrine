// quick fix for blog posts 😓 https://github.com/hashicorp/next-mdx-remote/issues/307
'use client';
import { MDXProvider } from '@mdx-js/react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import Image from 'next/image';

interface MDXContentProps {
  source: MDXRemoteProps;
}

const ResponsiveImage = (props: any) => {
  return (
    <Image {...props} alt={'hello'} width={props.width} height={props.height} />
  );
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXProvider components={{ img: ResponsiveImage }}>
      <MDXRemote {...source} />
    </MDXProvider>
  );
}
