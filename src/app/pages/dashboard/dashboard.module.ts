import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard.routing.module";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzAvatarModule} from "ng-zorro-antd/avatar";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzGridModule,
    NzCardModule,
    NzProgressModule,
    NzStatisticModule,
    NzInputModule,
    NzIconModule,
    NzTableModule,
    NzPaginationModule,
    NzAvatarModule
  ]
})
export class DashboardModule { }
