import {NgModule} from "@angular/core";
import {PostAndStoryComponent} from "./post-and-story.component";
import {CommonModule} from "@angular/common";
import {PostAndStoryRoutingModule} from "./post-and-story.routing.module";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [
    PostAndStoryComponent
  ],
  imports: [
    CommonModule,
    PostAndStoryRoutingModule,
    NzRadioModule,
    FormsModule,
    NzButtonModule,
    NzGridModule,
    NzSelectModule,
    NzTagModule,
    NzIconModule,
    NzTableModule,
    NzInputModule,
    NzProgressModule
  ]
})
export class PostAndStoryModule { }
