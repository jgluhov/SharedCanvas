import { Component } from '@angular/core';

@Component({
    selector: 'app-color-palette',
    styleUrls: ['./color-palette.styles.scss'],
    template: `
        <div class="color-palette__item" *ngFor="let color of colors">
            <app-squishy-button [color]="color"></app-squishy-button>
        </div>
    `
})
export class ColorPaletteComponent {
    public colors: string[] = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple'
    ];
}
