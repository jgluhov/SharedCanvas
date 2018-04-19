import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        LogoComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {}
