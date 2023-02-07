import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsComponent } from './campaigns.component';
import {SharedModule} from "../../shared/shared/shared.module";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {CampaignsRoutingModule} from "./campaigns.routing.module";
import {CreateCampaignsComponent} from "./create-campaigns/create-campaigns.component";


@NgModule({
  declarations: [
    CampaignsComponent,
    CreateCampaignsComponent,
  ],
  imports: [
    CommonModule,
    CampaignsRoutingModule,
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
    NzPaginationModule,
  ]
})
export class CampaignsModule { }
