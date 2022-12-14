// quick fix for blog posts 😓 https://github.com/hashicorp/next-mdx-remote/issues/307
'use client';
import { MDXProvider } from '@mdx-js/react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import Image from 'next/image';
// import { Heading2 } from '../app/components/mdx/MdxComponents';

interface MDXContentProps {
  source: MDXRemoteProps;
}

const shortcodes = { Image };

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXProvider components={shortcodes}>
      <MDXRemote {...source} />
    </MDXProvider>
  );
}
