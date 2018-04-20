import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCanvasComponent } from './shared-canvas.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SharedCanvasComponent
    ],
    exports: [
        SharedCanvasComponent
    ]
})
export class SharedCanvasModule {}
