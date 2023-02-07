import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostStoryService {

  post: any;

  constructor() { }

  publishPost(newPost: any): void {
    this.post = newPost
  }
}
