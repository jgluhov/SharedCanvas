import { Component } from '@angular/core';

@Component({
  selector: 'app-version',
  template: '{{ version }}',
  styleUrls: ['./version.styles.css']
})
export class VersionComponent {
  public version: string = process.env.VERSION || '';
}
