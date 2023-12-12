// timer-reset.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset',
  template: `
    <div>
      <button (click)="resetTimer()">Reset Timer</button>
    </div>
  `,
})
export class ResetComponent {
  @Output() reset = new EventEmitter<void>();

  resetTimer() {
    this.reset.emit();
  }
}