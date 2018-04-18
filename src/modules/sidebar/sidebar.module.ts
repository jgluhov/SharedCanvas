import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { PaletteComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SidebarComponent,
        PaletteComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule {}
