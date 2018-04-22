import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import {
    HeaderModule,
    SharedCanvasModule,
    DashboardModule
} from './modules';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppStoreModule,
        HeaderModule,
        SharedCanvasModule,
        DashboardModule
    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
