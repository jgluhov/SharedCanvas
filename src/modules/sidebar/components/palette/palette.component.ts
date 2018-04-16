import { Component } from '@angular/core';

@Component({
  selector: 'app-palette',
  template: `
    <app-palette-item *ngFor="let color of colors" [color]="color"></app-palette-item>
  `,
})
export class PaletteComponent {
  public colors: string[] = [
    'black'
  ];
}
