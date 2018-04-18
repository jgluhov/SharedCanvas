import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar">
        <app-palette></app-palette>
    </div>
  `,
  styleUrls: ['./sidebar.styles.css']
})
export class SidebarComponent {
}
