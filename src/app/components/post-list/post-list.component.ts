import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from '../../services/post.service';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [AsyncPipe, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, PostDetailComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  protected formular;
  protected posts$;

  constructor(fb: FormBuilder, protected postService: PostService) {
    this.formular = fb.group({
      content: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });

    this.posts$ = this.postService.getPosts();
  }

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
