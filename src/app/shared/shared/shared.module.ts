import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCardModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzButtonModule,
    NzDropDownModule
  ],
  exports: [
    NzCardModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzButtonModule,
    NzDropDownModule
  ]
})
export class SharedModule { }
