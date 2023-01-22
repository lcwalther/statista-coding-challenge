export type SearchResult = {
  identifier: string;  
  title: string;
  link: string;
  subject: string;
  description: string;
  date: string;
  premium: number;
  image_url: string;
  teaser_image_urls: TeaserImageUrl[]
}

type TeaserImageUrl = {
  width: number;
  src: string;
}