import {
    Component,
    HostListener
} from '@angular/core';
import {
    animate,
    trigger,
    state,
    style,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-logo',
    styleUrls: ['./logo.styles.scss'],
    template: `
        <div [@logoState]="logoState" class="app-logo__content">
            <ng-content></ng-content>
        </div>
    `,
    animations: [
        trigger('logoState', [
            state('hovered', style({
                transform: 'scale(1.05)'
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
