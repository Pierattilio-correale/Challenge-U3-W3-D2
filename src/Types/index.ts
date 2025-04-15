export interface ArticleAuthor {
  name: string;
  socials: {
    x?: string;
    youtube?: string;
    instagram?: string;
    linkedin?: string;
    mastodon?: string;
    bluesky?: string;
  } | null;
}

export interface Article {
  id: number;
  title: string;
  authors: ArticleAuthor[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: string;
  events: string;
}

export default interface ArticleApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];
}
