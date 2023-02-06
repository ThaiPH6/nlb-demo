import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CampaignsComponent} from "./campaigns.component";
import {CreateCampaignsComponent} from "./create-campaigns/create-campaigns.component";


const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent
  },
  {
    path: 'create-campaigns',
    component: CreateCampaignsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
