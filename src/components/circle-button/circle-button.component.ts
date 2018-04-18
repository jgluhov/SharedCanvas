import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'app-circle-button',
    template: `
        <button type="button" (click)="toggle()" [class.active]="active"></button>
    `,
    styleUrls: [ './circle-button.styles.css' ]
})

export class CircleButtonComponent {
    public active = false;

    toggle() {
        this.active = !this.active;
    }
}
