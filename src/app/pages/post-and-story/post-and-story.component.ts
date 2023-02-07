import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Post } from './create-post/media.model';
import { PostStoryService } from './post-story.service';

@Component({
  selector: 'app-post-and-story',
  templateUrl: './post-and-story.component.html',
  styleUrls: ['./post-and-story.component.scss'],
})
export class PostAndStoryComponent implements OnInit {
  size: NzButtonSize = 'large';
  currentPage = 1;
  checked = false;
  buttons: Array<string> = ['Published', 'Scheduled', 'Drafts'];

  dataTitle: any = [
    {
      label: 'Title',
      icon: false,
      width: '700px'
    },
    {
      label: 'Date published',
      icon: false,
      width: '230px'
    },
    {
      label: 'Reach',
      icon: true,
      width: '250px'
    },
    {
      label: 'Engagements',
      icon: true,
      width: '200px'
    },
    {
      label: 'Likes and reactions',
      icon: true,
      width: '200px'
    },
    {
      label: 'Comment',
      icon: true,
      width: '200px'
    },
    {
      label: 'Share',
      icon: true,
      width: '200px'
    },
  ];

  listOfData: Post[] = [];

  inputVisible = false;
  inputValue = '';
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  tags = [
    { title: 'House', color: '#ecb5ff' },
    { title: 'Music', color: '#a7ed8e' },
    { title: 'Art', color: '#ffb8b8' },
    { title: 'Education', color: '#a3daff' },
  ];
  constructor(
    private postService: PostStoryService
  ) {}

  ngOnInit(): void {
    this.listOfData = this.postService.listOfData
  }

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
