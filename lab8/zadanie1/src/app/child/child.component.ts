// child.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h3>Child Component</h3>
      <label *ngFor="let color of colors">
        <input type="radio" [value]="color" [(ngModel)]="selectedColor" (change)="selectColor()" [style.accent-color]="color" />
        {{ color }}
      </label>
    </div>
  `,
  styles: [`
    label {
      display: block;
      margin-bottom: 5px;
    }
  `]
})
export class ChildComponent {
  @Input() colors: string[] = [];
  @Output() colorSelected = new EventEmitter<string>();
  selectedColor: string = '';

  selectColor() {
    this.colorSelected.emit(this.selectedColor);
  }
}