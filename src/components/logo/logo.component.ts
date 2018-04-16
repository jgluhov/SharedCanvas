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
      state('hovered', style({
        transform: 'scale(1.1)'
      })),
      state('*', style({
        transform: 'scale(1)'
      })),
      transition('* => hovered', animate('100ms ease-in')),
      transition('hovered => *', animate('100ms ease-out'))
    ])
  ]
})

export class LogoComponent {
  public logoState = '';
  @HostListener('mouseenter') handleMouseEnter() {
    this.logoState = 'hovered';
  }
  @HostListener('mouseleave') handleMouseLeave() {
    this.logoState = '';
  }
}
