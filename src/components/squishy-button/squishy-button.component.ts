import { Component, Input, HostListener } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';

@Component({
    selector: 'app-squishy-button',
    styleUrls: ['./squishy-button.styles.scss'],
    template: `
        <button class='squishy-button__button squishy-button__button--{{color}}'
            [@btnState]="btnState">
        </button>
    `,
    animations: [
        trigger('btnState', [
            state('pressed', style({
                transform: 'scale(0.95)'
            })),
            state('*', style({
                transform: 'scale(1)'
            })),
            transition('* => pressed', animate('100ms ease-in')),
            transition('pressed => *', animate('100ms ease-out'))
        ])
    ]
})
export class SquishyButtonComponent {
    public btnState = '';

    @Input('color') color: string;
    @HostListener('mousedown') handleMouseDown() {
        this.btnState = 'pressed';
    }
    @HostListener('mouseup') handleMouseUp() {
        this.btnState = '';
    }
}
