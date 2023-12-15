// posts.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-posts',
  template: `
    <h2>Posts</h2>
    <form [formGroup]="postForm" (ngSubmit)="onSubmit()">
      <label for="title">Title:</label>
      <input type="text" id="title" formControlName="title" required>

      <label for="body">Body:</label>
      <textarea id="body" formControlName="body" required></textarea>

      <button type="submit" [disabled]="postForm.invalid">Create Post</button>
    </form>

    <div *ngFor="let post of posts">
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  `,
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  postForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      this.posts = data;
    });

    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost = {
        title: this.postForm.value.title,
        body: this.postForm.value.body,
        userId: 1, // Assuming a user ID for simplicity
      };

      this.http.post('https://jsonplaceholder.typicode.com/posts', newPost).subscribe((response) => {
        console.log('Post created:', response);
        this.ngOnInit();

        this.postForm.reset();
      });
    }
  }
}
