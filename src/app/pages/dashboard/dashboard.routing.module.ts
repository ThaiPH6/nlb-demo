import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {title: 'dashboard'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
