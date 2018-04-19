import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardModule } from '../../modules';

@NgModule({
  imports: [
      CommonModule,
      DashboardModule,
      HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
