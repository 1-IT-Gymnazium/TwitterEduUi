import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // except for /login endpoint
        if (request.url.includes('/login')) {
            return next.handle(request);
        }
        // edit request
        request = request.clone({
            // bring token from sessionStorage and add as header
            setHeaders: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        });
        return next.handle(request);
    }

}
