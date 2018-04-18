import { Component } from '@angular/core';

@Component({
  selector: 'app-palette',
  template: `
    <app-circle-button></app-circle-button>
  `,
  styleUrls: ['./palette.styles.css']
})
export class PaletteComponent {
  public colors: string[] = [
    'black',
    'brown'
  ];
}
