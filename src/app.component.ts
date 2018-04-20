import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <app-dashboard></app-dashboard>
        <app-shared-canvas></app-shared-canvas>
    `,
    styleUrls: ['./app.styles.scss']
})
export class AppComponent {}
