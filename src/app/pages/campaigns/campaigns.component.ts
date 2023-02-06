import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  size: NzButtonSize = 'large';
  buttons: Array<string> = ['Published', 'Scheduled', 'Drafts'];
  currentPage = 1;
  checked = false;
  inputVisible = false;
  inputValue = '';
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  dataTitle: any = [
    {
      label: 'Campaign ID',
      width: '150px'
    },
    {
      label: 'Title',
      width: '200px'
    },
    {
      label: 'Date published',
      width: '200px'
    },
    {
      label: 'Reach',
      width: '200px'
    },
    {
      label: 'Engagements',
      width: '200px'
    },
    {
      label: 'Share/Forwards',
      width: '200px'
    },
    {
      label: 'Click though',
      width: '200px'
    },
    {
      label: 'Conversion',
      width: '200px'
    },
  ];

  listOfData: any = [
    {
      key: '1',
      campaignId: 'FB0094',
      title: 'How to become a leader',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      sharesAndFowards: '374',
      clickThough: '374',
      conversion: '374',
    },
    {
      key: '2',
      campaignId: 'FB0094',
      title: 'How to become a leader',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      sharesAndFowards: '374',
      clickThough: '374',
      conversion: '374',
    },
    {
      key: '3',
      campaignId: 'FB0094',
      title: 'How to become a leader',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      sharesAndFowards: '374',
      clickThough: '374',
      conversion: '374',
    },
    {
      key: '4',
      campaignId: 'FB0094',
      title: 'How to become a leader',
      datePublished: Date.now(),
      reach: '243',
      engagements: '23',
      sharesAndFowards: '374',
      clickThough: '374',
      conversion: '374',
    },
  ]

  tags = [
    { title: 'House', color: '#ecb5ff' },
    { title: 'Music', color: '#a7ed8e' },
    { title: 'Art', color: '#ffb8b8' },
    { title: 'Education', color: '#a3daff' },
  ];

  constructor() { }

  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter((tag) => tag !== removedTag);
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

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  ngOnInit(): void {
  }

}
