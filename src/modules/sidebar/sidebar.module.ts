import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { PaletteComponent } from './components';
import { CircleButtonComponent } from '../../components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SidebarComponent,
        PaletteComponent,
        CircleButtonComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule {}
