import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.styles.scss']
})
export class AppComponent {}
