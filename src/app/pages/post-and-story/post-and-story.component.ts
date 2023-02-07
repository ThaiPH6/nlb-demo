import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

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
  addTagClicked: boolean = false;
  inputColor: any;

  visibleCreateTagPopover: boolean = false;
  visibleCreateAddPopover: boolean = false;


  dataTitle: any = [
    {
      label: 'Title',
      icon: false,
      width: '700px',
    },
    {
      label: 'Date published',
      icon: false,
      width: '230px',
    },
    {
      label: 'Reach',
      icon: true,
      width: '250px',
    },
    {
      label: 'Engagements',
      icon: true,
      width: '200px',
    },
    {
      label: 'Likes and reactions',
      icon: true,
      width: '200px',
    },
    {
      label: 'Comment',
      icon: true,
      width: '200px',
    },
    {
      label: 'Share',
      icon: true,
      width: '200px',
    },
  ];

  listOfData: any = [
    {
      key: '1',
      title: 'Double room...only 4xx000 VND/ night 1',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63',
      status: 'Boost post',
      comment: '2',
      share: '524',
    },
    {
      key: '2',
      title: 'Double room...only 4xx000 VND/ night 2',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63',
      status: 'Boost post',
      comment: '2',
      share: '524',
    },
    {
      key: '3',
      title: 'Double room...only 4xx000 VND/ night 3',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63',
      status: 'Boost post',
      comment: '2',
      share: '524',
    },
    {
      key: '4',
      title: 'Double room...only 4xx000 VND/ night 4',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      likeAndReactions: '63',
      status: 'Insight',
      comment: '2',
      share: '524',
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
    this.visibleCreateTagPopover = false;
    this.inputColor = document.getElementById('color');
    if (this.inputValue) {
      this.tags.push({ title: this.inputValue, color: this.inputColor.value });
    }
    this.inputValue = '';
    this.inputVisible = false;
  }

  onClickCancelPopover(): void {
    this.visibleCreateTagPopover = false;
  }

  changeCreateTagStatusPopOver(value: boolean): void {
    console.log(value);
  }

  changeAddTagStatusPopOver(value: boolean): void {
    console.log(value);
  }

  onClickAddTag(index : any){
    console.log(index);
  }
}
