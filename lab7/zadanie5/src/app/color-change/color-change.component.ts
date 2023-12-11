// color-change.component.ts
import { Component } from '@angular/core';

interface Box {
  backgroundColor?: string;
}

@Component({
  selector: 'app-color-change',
  template: `
    <div *ngFor="let box of boxes; let i = index" 
         [ngStyle]="{ 'background-color': box.backgroundColor }"
         (mousedown)="changeColor(i)">
    </div>
  `,
  styles: [`
    div {
      width: 100px;
      height: 100px;
      margin: 10px;
      cursor: pointer;
      display: inline-block;
    }
    div:hover{
      border: 1px solid black;
      opacity:0.8;
    }
  `]
})
export class ColorChangeComponent {
  boxes: Box[] = [{}, {}, {}];

  changeColor(index: number) {
    const currentColor = this.boxes[index].backgroundColor;
    if (currentColor) {
      // Jeśli tło jest ustawione, usuń je
      this.boxes[index].backgroundColor = '';
    } else {
      // W przeciwnym razie, ustaw losowy kolor
      const randomColor = this.getRandomColor();
      this.boxes[index].backgroundColor = randomColor;
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}