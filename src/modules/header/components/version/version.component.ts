import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-version',
    template: '{{ version }}',
    styleUrls: ['./version.styles.scss']
})
export class VersionComponent {
    public version: string = process.env.VERSION || '';
}
