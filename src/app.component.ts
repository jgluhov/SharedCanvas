import {
    Component
} from '@angular/core';
console.log(require('./app.styles.scss'));
@Component({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
    `,
    styles: [
        require('./app.styles.scss')
    ]
})
export class AppComponent {}
