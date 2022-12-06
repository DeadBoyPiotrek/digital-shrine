export type PostProps = {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly date: string;
  readonly img: {
    readonly url: string;
  };
  readonly dateCreated: string;
};

export type AllPostsProps = PostProps[];
