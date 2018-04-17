import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <app-logo>Shared Canvas</app-logo>
        <app-version></app-version>
    `,
    styleUrls: ['./header.styles.css']
})
export class HeaderComponent {}
