import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'app-palette-item',
    template: `
        <div [ngClass]="getClass()"></div>
    `,
    styleUrls: [ './palette-item.styles.css' ]
})
export class PaletteItemComponent {
    @Input('color') color = '';

    getClass(color: string) {
        return {
            'palette__element': true,
            [`palette__element-${this.color}`]: true
        };
    }
}
