import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ColorPaletteComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DashboardComponent,
        ColorPaletteComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {}
