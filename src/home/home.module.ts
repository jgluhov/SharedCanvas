import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SidebarComponent } from '../components';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(homeRoutes)
    ],
  declarations: [
    HomeComponent,
    SidebarComponent
  ]
})
export class HomeModule {}
