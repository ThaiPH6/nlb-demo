import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard.routing.module";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzGridModule,
    NzCardModule
  ]
})
export class DashboardModule { }
