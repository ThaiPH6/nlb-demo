import { Injectable } from '@angular/core';
import { Post } from './create-post/media.model';

@Injectable({
  providedIn: 'root'
})
export class PostStoryService {

  post!: Post;

  listOfData: Post[] = [
    {
      key: '1',
      title: 'Double room...only 4xx000 VND/ night',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63',
      isBoostPost: true,
      comment: '2',
      share: '524',
      tags: [
        { title: 'House', color: '#ecb5ff' },
        { title: 'Music', color: '#a7ed8e' },
        { title: 'Art', color: '#ffb8b8' },
      ]
    },
  ];

  constructor() { }

  publishPost(newPost: Post): void {
    this.listOfData = [...this.listOfData, newPost];
  }
}
