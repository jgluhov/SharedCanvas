import { Component } from '@angular/core';

@Component({
  selector: 'app-palette',
  template: `
    <app-palette-item
        *ngFor="let color of colors"
        [color]="color">
    </app-palette-item>
  `,
  styleUrls: ['./palette.styles.css']
})
export class PaletteComponent {
  public colors: string[] = [
    'black',
    'brown'
  ];
}
