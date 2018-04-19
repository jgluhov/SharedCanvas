import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <app-logo>Shared Canvas</app-logo>
    `,
    styleUrls: ['./header.styles.scss']
})
export class HeaderComponent {}
