import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    SidebarComponent
} from './sidebar.component';
import {
    PaletteComponent,
    PaletteItemComponent
} from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SidebarComponent,
        PaletteComponent,
        PaletteItemComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule {}
