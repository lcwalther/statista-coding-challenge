export type TSearchResult = {
  identifier: number;  
  title: string;
  link: string;
  subject: string;
  description: string;
  date: string;
  premium: number;
  image_url: string;
  teaser_image_urls: TTeaserImageUrl[]
}

type TTeaserImageUrl = {
  width: number;
  src: string;
}