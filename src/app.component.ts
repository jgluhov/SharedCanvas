import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-header>Shared Canvas</app-header>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
}
