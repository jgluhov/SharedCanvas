import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  HeaderComponent,
  LogoComponent,
  VersionComponent,
  SidebarComponent
} from './components';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
      AppComponent,
      HeaderComponent,
      LogoComponent,
      VersionComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
