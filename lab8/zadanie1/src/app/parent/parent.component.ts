// parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <h2>Parent Component</h2>
      <app-child [colors]="colors" (colorSelected)="setColor($event)"></app-child>
      <div *ngIf="selectedColor">
        <h3>Selected Color: {{ selectedColor }}</h3>
        <div [style.background]="selectedColor" class="color-display"></div>
      </div>
    </div>
  `,
  styles: [`
    .color-display {
      width: 100px;
      height: 100px;
      margin-top: 10px;
    }
  `]
})
export class ParentComponent {
  colors: string[] = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'brown'];
  selectedColor: string = ''; // Dodanie wartości domyślnej

  setColor(color: string) {
    this.selectedColor = color;
  }
}