import { LoginModel } from '../models/login.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/api/v1/Auth';
  private readonly router = inject(Router);
  private readonly httpClient = inject(HttpClient);
  private isLoggedInSubject = new ReplaySubject<boolean>(1);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(){
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.isLoggedInSubject.next(true);  // User is authenticated
    } else {
      this.isLoggedInSubject.next(false);  // User is not authenticated
    }
  }

  login(data: LoginModel): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/Login`, data).pipe(
      tap((response) => {
        const token = response.token;
        localStorage.setItem('accessToken', token);

        this.router.navigate(['/home']);
        this.isLoggedInSubject.next(true);
      })
    );
  }

  refreshToken(): Observable<string> {
    return this.httpClient
      .post<{ token: string }>(`${this.baseUrl}/Refresh`, {}).pipe(
        map((response) => {
          const newAccessToken = response.token;
          localStorage.setItem('accessToken', newAccessToken);
          return newAccessToken;
        })
      );
  }

  logout(): void {
    this.httpClient
      .post(`${this.baseUrl}/Logout`, {})
      .subscribe(() => {
        localStorage.removeItem('accessToken');
        this.isLoggedInSubject.next(false);
        this.router.navigate(['/login']);
      });
  }

  isAuthenticated(): boolean {
    let isAuthenticated = false;
    this.isLoggedInSubject
      .subscribe((status) => (isAuthenticated = status))
      .unsubscribe();
    return isAuthenticated;
  }
}
