// quick fix for blog posts 😓 https://github.com/hashicorp/next-mdx-remote/issues/307
'use client';
import { MDXProvider } from '@mdx-js/react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import Image from 'next/image';

interface MDXContentProps {
  source: MDXRemoteProps;
}

const RedText = (props: any) => {
  return <span style={{ color: 'blue' }}>{props.children}</span>;
};

const h2 = (props: any) => {
  return <h2 style={{ color: 'red' }}>{props.children}</h2>;
};
const shortcodes = { Image, RedText, h2 };

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXProvider components={shortcodes}>
      <MDXRemote {...source} />
    </MDXProvider>
  );
}
