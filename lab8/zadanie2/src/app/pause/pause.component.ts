// timer-controls.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pause',
  template: `
    <div>
      <button (click)="startTimer()">Start Timer</button>
      <button (click)="stopTimer()">Stop Timer</button>
    </div>
  `,
})
export class PauseComponent {
  @Output() start = new EventEmitter<void>();
  @Output() stop = new EventEmitter<void>();

  startTimer() {
    this.start.emit();
  }

  stopTimer() {
    this.stop.emit();
  }
}