import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {
    ColorPaletteComponent,
    ToggleButtonComponent
} from '@components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DashboardComponent,
        ColorPaletteComponent,
        ToggleButtonComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {}
