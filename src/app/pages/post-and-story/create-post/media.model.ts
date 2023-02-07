import { SafeResourceUrl } from "@angular/platform-browser";

export interface Media {
  //key: string;
  image: string | null | ArrayBuffer | SafeResourceUrl;
  size: string;
}

export interface Post {
  key: string;
  title: string;
  tags: Tag[];
  isBoostPost: boolean;
  datePublished: number;
  reach: string;
  engagements: string;
  likeAndReactions: string;
  comment: string;
  share: string;
}

export interface Tag {
  title: string;
  color: string;
}