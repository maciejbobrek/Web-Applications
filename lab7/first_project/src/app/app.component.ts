import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userTestStatus:{ name: string, phone: number, email: string  }[] = [
    { "name": "Available", "phone": 234434, "email": "123@pl" },
    { "name": "ma", "phone": 234434, "email": "123@pl" },
    { "name": "metro", "phone": 234434, "email": "123@pl" },
    { "name": "Available", "phone": 234434, "email": "123@pl" },
    { "name": "Available", "phone": 234434, "email": "123@pl" },
    { "name": "Available", "phone": 234434, "email": "123@pl" },
  ];
}
