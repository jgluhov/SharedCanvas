import {
    NgModule, Version
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    HeaderComponent
} from './header.component';
import {
    LogoComponent,
    VersionComponent
} from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        LogoComponent,
        VersionComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {}
