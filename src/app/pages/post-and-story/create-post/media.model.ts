import { SafeResourceUrl } from "@angular/platform-browser";

export interface Media {
  //key: string;
  image: string | null | ArrayBuffer | SafeResourceUrl;
  size: string;
}

export interface Post {
  title: string;
  tags: Tag[];
  isBoostPost: boolean;
  datePublished: Date;
}

export interface Tag {
  tabLabel: string;
  color: string;
}