import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-post-and-story',
  templateUrl: './post-and-story.component.html',
  styleUrls: ['./post-and-story.component.scss'],
})
export class PostAndStoryComponent implements OnInit {
  size: NzButtonSize = 'large';
  checked = false;
  buttons: Array<string> = ['Published', 'Scheduled', 'Drafts'];

  dataTitle: any = [
    {
      label: 'Title',
      icon: false,
    },
    {
      label: 'Date published',
      icon: false,
    },
    {
      label: 'Reach',
      icon: true,
    },
    {
      label: 'Engagements',
      icon: true,
    },
    {
      label: 'Likes and reactions',
      icon: true,
    },
  ];

  listOfData: any = [
    {
      key: '1',
      title: 'Double room...only 4xx000 VND/ night',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63',
      status: 'Boost post'
    },
    {
      key: '2',
      title: 'Double room...only 4xx000 VND/ night',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63',
      status: 'Boost post'
    },
    {
      key: '3',
      title: 'Double room...only 4xx000 VND/ night',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63',
      status: 'Boost post'
    },
    {
      key: '4',
      title: 'Double room...only 4xx000 VND/ night',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63',
      status: 'Insight'
    },
  ];

  inputVisible = false;
  inputValue = '';
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  tags = [
    { title: 'House', color: '#ecb5ff' },
    { title: 'Music', color: '#a7ed8e' },
    { title: 'Art', color: '#ffb8b8' },
    { title: 'Education', color: '#a3daff' },
  ];
  constructor() {}

  ngOnInit(): void {}

  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter((tag) => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue) {
      this.tags.push({title: this.inputValue, color: '#a3daff'});
    }
    this.inputValue = '';
    this.inputVisible = false;
  }
}
