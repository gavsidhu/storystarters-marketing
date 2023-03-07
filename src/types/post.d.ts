export interface Post {
  category: string[];
  description: string;
  mainImage: string;
  publishedAt: number;
  slug: {
    current: string;
    _type: string;
  };
  title: string;
  author: string;
  authorImage: string;
  authorUrl: string;
  body: TypedObject | TypedObject[];
}
