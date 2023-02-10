export type PostProps = {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly content: string;
  readonly excerpt: string;
  readonly datePublished: string;
  readonly img: {
    readonly width: number;
    readonly height: number;
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
    readonly width: number;
    readonly height: number;
  };
};
