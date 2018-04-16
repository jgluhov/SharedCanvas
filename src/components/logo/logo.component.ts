import { Component, HostListener } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-logo',
  styleUrls: [ './logo.styles.css' ],
  template: `
    <div class="logo" [@logoState]="logoState">
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('logoState', [
      state('active', style({
        transform: 'scale(1.1)'
      })),
      state('inactive', style({
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

export class LogoComponent {
  public logoState = 'inactive';
  @HostListener('mouseenter') handleMouseEnter() {
    this.logoState = 'active';
  }
  @HostListener('mouseleave') handleMouseLeave() {
    this.logoState = 'inactive';
  }
}
