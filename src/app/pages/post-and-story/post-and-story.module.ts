import { NgModule } from '@angular/core';
import { PostAndStoryComponent } from './post-and-story.component';
import { CommonModule } from '@angular/common';
import { PostAndStoryRoutingModule } from './post-and-story.routing.module';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CreatePost } from './create-post/create-post.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {NzPaginationModule} from "ng-zorro-antd/pagination";

@NgModule({
  declarations: [PostAndStoryComponent, CreatePost],
  imports: [
    CommonModule,
    PostAndStoryRoutingModule,
    SharedModule,
    NzRadioModule,
    FormsModule,
    NzButtonModule,
    NzGridModule,
    NzSelectModule,
    NzTagModule,
    NzIconModule,
    NzTableModule,
    NzInputModule,
    NzProgressModule,
    NzAvatarModule,
    ReactiveFormsModule,
    DragDropModule,
    NzPaginationModule
  ],
})
export class PostAndStoryModule {}
