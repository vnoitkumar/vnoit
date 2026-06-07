export interface Author {
  name: string;
  picture: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: Author;
  ogImage: { url: string };
  twitterHandel: string;
  coverImageBlurHash: string;
  tag?: string;
  slug: string;
  content: string;
}
