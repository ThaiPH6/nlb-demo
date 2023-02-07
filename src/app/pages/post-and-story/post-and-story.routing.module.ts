import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostAndStoryComponent} from "./post-and-story.component";
import { CreatePost } from "./create-post/create-post.component";


const routes: Routes = [
  {
    path: '',
    component: PostAndStoryComponent
  },
  {
    path: 'create',
    component: CreatePost
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAndStoryRoutingModule { }
