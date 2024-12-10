import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDetail } from '../models/post-detail.interface';
import { PostCreate } from '../models/post-create.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  protected readonly baseUrl = '/api/Post';

  getPosts(): Observable<PostDetail[]> {
    const url = this.baseUrl;
    return this.httpClient.get<PostDetail[]>(url);
  }

  getPost(id: string): Observable<PostDetail> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<PostDetail>(url);
  }

  createPost(data: PostCreate): Observable<PostDetail> {
    const url = this.baseUrl;
    return this.httpClient.post<PostDetail>(url, data);
  }
}
