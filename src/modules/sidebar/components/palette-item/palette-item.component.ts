import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'app-palette-item',
    template: `
        <button [style.backgroundColor]="color"></button>
    `,
    styleUrls: [ './palette-item.styles.css' ]
})
export class PaletteItemComponent {
    @Input('color') color = '';
}
