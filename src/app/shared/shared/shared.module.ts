import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCardModule,
    NzLayoutModule,
    NzIconModule
  ],
  exports: [
    NzCardModule,
    NzLayoutModule,
    NzIconModule
  ]
})
export class SharedModule { }
