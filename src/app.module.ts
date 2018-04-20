import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HeaderModule
    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
