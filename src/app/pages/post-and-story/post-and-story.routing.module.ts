import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostAndStoryComponent} from "./post-and-story.component";


const routes: Routes = [
  {
    path: '',
    component: PostAndStoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAndStoryRoutingModule { }
