import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <app-logo>Shared Canvas</app-logo>
    </header>
  `,
  styleUrls: ['./header.styles.css']
})
export class HeaderComponent {
}
