import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <nav>
        <a routerLink="/home">Home</a>
        <a routerLink="/posts">Posts</a>
        <a routerLink="/photos">Photos</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      header {
        background-color: #333;
        padding: 10px;
        color: white;
        text-align: center;
      }

      nav {
        display: flex;
        justify-content: space-around;
      }

      a {
        color: white;
        text-decoration: none;
        padding: 5px;
      }
    `,
  ],
})
export class AppComponent {}