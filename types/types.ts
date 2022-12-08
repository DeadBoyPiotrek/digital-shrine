export type PostProps = {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly content: string;
  readonly excerpt: string;
  readonly datePublished: string;
  readonly img: {
    readonly url: string;
  };
};

export type PostPreviewProps = {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly datePublished: string;
  readonly img: {
    readonly url: string;
  };
};

export type AllPostsProps = PostProps[];

export type AllPostsPreviewsProps = PostPreviewProps[];
