import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-canvas',
  template: `
    <canvas #sharedCanvas></canvas>
  `,
  styleUrls: ['./shared-canvas.styles.scss']
})
export class SharedCanvasComponent {
}
