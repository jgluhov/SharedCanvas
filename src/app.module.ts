import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './modules';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule
    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
