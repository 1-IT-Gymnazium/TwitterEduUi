import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from '../../services/post.service';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [ RouterLink, AsyncPipe, FormsModule, ReactiveFormsModule, PostDetailComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  protected readonly fb = inject(FormBuilder);
  protected readonly postService = inject(PostService);

  protected formular = this.fb.group({
    content: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  protected posts$ = this.postService.getPosts();

  showForm: boolean = false;

  onSubmit(): void {
    const data = this.formular.getRawValue();

    this.postService.createPost(data).subscribe({
      next: () => {
        this.refreshData();
        this.closeForm();
      },
    });
  }

  closeForm() {
    this.showForm = false;
    this.formular.reset();
  }

  refreshData() {
    this.posts$ = this.postService.getPosts();
  }
}
