import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <app-logo>Shared Canvas</app-logo>
      <div class="header__version">{{ version }}</div>
    </div>
  `,
  styleUrls: ['./header.styles.css']
})
export class HeaderComponent {
  public version: string = process.env.VERSION || '';
}
