import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TablasModule } from '../pages/tablas/tablas.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TablasModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
