import { PostDetail } from '../models/post-detail.interface';
import { Router, type ResolveFn } from '@angular/router';
import { PostService } from '../services/post.service';
import { inject } from '@angular/core';
import { catchError, of } from 'rxjs';

export const postDetailResolver: ResolveFn<undefined | PostDetail> = (
  route,
  state
) => {
  const postId = route.paramMap.get('postId');
  const router = inject(Router);
  const postService = inject(PostService);

  if (!postId) {
    // Message // Toaster
    console.error('Post Id was not found');
    return of(undefined);
  }

  return postService.getPost(postId).pipe(
    catchError(async (err) => {
      console.log(err);
      await router.navigate(['']);
      throw of(err);
    })
  );
};
