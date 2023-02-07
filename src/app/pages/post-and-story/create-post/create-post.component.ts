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
import { Media } from './media.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
      value: 'Facebook Post',
      logo: 'facebook',
    },
    {
      label: 'Instagram Post',
      value: 'Instagram Post',
      logo: 'instagram',
    },
    {
      label: 'Instagram Story',
      value: 'Instagram Story',
      logo: 'instagram',
    },
    {
      label: 'Telegram',
      value: 'Telegram',
      logo: 'wechat',
    },
    {
      label: 'Tiktok',
      value: 'Tiktok',
      logo: 'tiktok',
    },
    {
      label: 'Youtube',
      value: 'Youtube',
      logo: 'youtube',
    },
  ];

  listOfTags = [
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

  postTo: string = '';
  privacy: string = '';
  status: string = '';
  isBoostPost: boolean = true;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private _sanitizer: DomSanitizer
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
    this.listOfTags = this.listOfTags.filter((tag) => tag !== removedTag);
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
    if (this.fc['newtag'].value) {
      this.listOfTags.push({
        title: this.fc['newtag'].value,
        color: '#a3daff',
      });
    }
    this.fc['newtag'].setValue('');
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
        this.listOfPhotos = [...this.listOfPhotos, { image: imageUrl, size: '1425x838' }]
        //this.listOfPhotos.push({ image: imageUrl, size: '123133' });
        console.log('aaaa', file);
        console.log('alooo', reader.result);
        console.log(this.listOfPhotos);

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
}
