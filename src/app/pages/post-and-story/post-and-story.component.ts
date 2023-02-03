import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";

@Component({
  selector: 'app-post-and-story',
  templateUrl: './post-and-story.component.html',
  styleUrls: ['./post-and-story.component.scss']
})
export class PostAndStoryComponent implements OnInit {
  size: NzButtonSize = 'large';
  checked = false;
  buttons: Array<string> = [
    'Published', 'Scheduled', 'Drafts'
  ]

  dataTitle: any = [
    {
      label: 'Title',
      icon: false,
    },
    {
      label: 'Date published',
      icon: false
    },
    {
      label: 'Reach',
      icon: true,
    },
    {
      label: 'Engagements',
      icon: true
    },
    {
      label: 'Likes and reactions',
      icon: true,
    }
  ]

  listOfData: any = [
    {
      key: '1',
      title: 'Double room...only 4xx000 VND/ night',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63'
    },
    {
      key: '2',
      title: 'Double room...only 4xx000 VND/ night',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63'
    },
    {
      key: '3',
      title: 'Double room...only 4xx000 VND/ night',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63'
    },
  ]

  constructor() { }


  ngOnInit(): void {
  }

}
