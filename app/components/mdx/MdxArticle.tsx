'use client';
import { MDXProvider } from '@mdx-js/react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import Image from 'next/image';
import { Link } from './Link';
interface MDXContentProps {
  source: MDXRemoteProps;
}

const shortcodes = { Image, a: Link };

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXProvider components={shortcodes}>
      <MDXRemote {...source} />
    </MDXProvider>
  );
}
