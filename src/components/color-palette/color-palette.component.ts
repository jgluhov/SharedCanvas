import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '@store';

@Component({
    selector: 'app-color-palette',
    styleUrls: ['./color-palette.styles.scss'],
    template: `
        <div class="color-palette__item" *ngFor="let color of colors$ | async">
            <app-squishy-button [color]="color"></app-squishy-button>
        </div>
    `
})
export class ColorPaletteComponent {
    colors$: Observable<string[]>;

    constructor(public store: Store<AppState>) {
        this.colors$ = this.store
            .select('dashboard')
            .select('colors');
    }
}
