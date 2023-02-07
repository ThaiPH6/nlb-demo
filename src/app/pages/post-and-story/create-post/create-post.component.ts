import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Media, Tag } from './media.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PostStoryService } from '../post-story.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePost implements OnInit {
  createPostForm!: FormGroup;

  listOfOptionAddress = [
    {
      label: 'Facebook Post',
      value: 'Facebook News Feed preview',
      logo: 'facebook',
      previewLabel: 'Facebook News Feed preview',
      selected: true
    },
    {
      label: 'Instagram Post',
      value: 'Instagram News Feed preview',
      logo: 'instagram',
      previewLabel: 'Instagram News Feed preview',
      selected: false
    },
    {
      label: 'Instagram Story',
      value: 'Instagram Story preview',
      logo: 'instagram',
      previewLabel: 'Instagram Story preview',
      selected: false
    },
    {
      label: 'Telegram',
      value: 'Telegram News Feed preview',
      logo: 'wechat',
      previewLabel: 'Telegram News Feed preview',
      selected: false
    },
    {
      label: 'Tiktok',
      value: 'Tiktok News Feed preview',
      logo: 'tiktok',
      previewLabel: 'Tiktok News Feed preview',
      selected: false
    },
    {
      label: 'Youtube',
      value: 'Youtube News Feed preview',
      logo: 'youtube',
      previewLabel: 'Youtube News Feed preview',
      selected: false
    },
  ];

  listOfTags = [
    { title: 'House', color: '#ecb5ff' },
    { title: 'Music', color: '#a7ed8e' },
    { title: 'Art', color: '#ffb8b8' },
    { title: 'Education', color: '#a3daff' },
  ];

  tagsToAdd = [
    { title: 'House', color: '#ecb5ff' },
    { title: 'Music', color: '#a7ed8e' },
    { title: 'Art', color: '#ffb8b8' },
    { title: 'Education', color: '#a3daff' },
  ];

  inputVisible = false;
  inputValue = '';

  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  privacies = [
    {
      label: 'Public',
      value: 'Public',
    },
    {
      label: 'Only me',
      value: 'Only me',
    },
  ];

  mediaMode: boolean = false;

  listOfPhotos: Media[] = [];

  scrollX: string | null = null;
  scrollY: string | null = null;

  postTo = ['Facebook News Feed preview'];

  defaultOptionPosto = [...this.postTo];
  
  privacy: string = '';
  status: string = '';
  isBoostPost: boolean = true;

  selectedSitePreview: string = 'Facebook News Feed preview';

  visibleCreateTagPopover: boolean = false;
  visibleCreateAddPopover: boolean = false;

  inputColor: any;

  currentSelectedTags: Tag[] = [];

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private _sanitizer: DomSanitizer,
    private postService: PostStoryService,
    private modal: NzModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.createPostForm = this.fb.group({
      postTo: [[]],
      privacy: ['Public'],
      status: [''],
      isBoostPost: [true],
      tags: [[]],
      newtag: [],
    });
  }

  handleClose(removedTag: {}): void {
    this.currentSelectedTags = this.currentSelectedTags.filter((tag) => tag !== removedTag);
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

  get fc() {
    return this.createPostForm.controls;
  }

  handleInputConfirm(): void {
    this.visibleCreateTagPopover = false;
    this.inputColor = document.getElementById('color');
    if (this.inputValue) {
      this.listOfTags.push({ title: this.inputValue, color: this.inputColor.value });
      this.tagsToAdd.push({ title: this.inputValue, color: this.inputColor.value });
    }
    this.inputValue = '';
    this.inputVisible = false;
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.listOfPhotos, event.previousIndex, event.currentIndex);
  }

  addPhoto(event: any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    let imageUrl: string | ArrayBuffer | SafeResourceUrl;
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onloadend = () => {
        imageUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
          `${reader.result}`
        );
        this.listOfPhotos = [...this.listOfPhotos, { image: imageUrl, size: '1425x838' }];

        //reader.readAsDataURL(file);
        // this.registrationForm.patchValue({
        //   file: reader.result
        // });
        // this.editFile = false;
        // this.removeUpload = true;
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  publishPost(): void {
    const newPost = {
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
    }

    this.postService.publishPost(newPost);
    this.modal.success({
      nzTitle: 'Published successfully',
      nzContent: 'Now that your post is successfully published, you can boost it to help it reach more of the people that matter to you.'
    });
    this.router.navigateByUrl('/main/post&story');
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

  handleChangeSelectTag(checked: boolean, tag: Tag): void {
    if (checked) {
      this.currentSelectedTags.push(tag);
    } else {
      this.currentSelectedTags = this.currentSelectedTags.filter(t => t !== tag);
    }
    console.log('You are interested in: ', this.currentSelectedTags);
  }

  
  handleAddTags(postIndex : number) {
    this.currentSelectedTags = this.tagsToAdd;
    
  }
}
