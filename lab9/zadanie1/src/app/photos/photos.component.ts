import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  template: `
    <h2>Photos</h2>
    <div *ngFor="let photo of photos">
      <p>{{ photo.title }}</p>
      <img [src]="photo.thumbnailUrl" alt="{{ photo.title }}" (click)="viewPhoto(photo.id)">
    </div>
  `,
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe((data) => {
      this.photos = data;
    });
  }

  viewPhoto(photoId: number) {
    // Redirect to the photo detail view
    // Assuming the route for photo detail is '/photo/:id'
    window.location.href = `/photo/${photoId}`;
  }
}