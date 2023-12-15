import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo-detail',
  template: `
    <h2>Photo Detail</h2>
    <div *ngIf="photo">
      <p>{{ photo.title }}</p>
      <img [src]="photo.url" alt="{{ photo.title }}">
    </div>
  `,
})
export class PhotoDetailComponent implements OnInit {
  photo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const photoId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`https://jsonplaceholder.typicode.com/photos/${photoId}`).subscribe((data) => {
      this.photo = data;
    });
  }
}