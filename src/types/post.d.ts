export interface Post {
  category: string;
  description: string;
  image: string;
  published: string;
  slug: {
    current: string;
    _type: string;
  };
  title: string;
  author: string;
  authorImage: string;
  authorUrl: string;
}
