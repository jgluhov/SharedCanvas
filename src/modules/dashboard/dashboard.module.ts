import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {
    ColorPaletteComponent,
    SquishyButtonComponent
} from '@components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DashboardComponent,
        ColorPaletteComponent,
        SquishyButtonComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {}
