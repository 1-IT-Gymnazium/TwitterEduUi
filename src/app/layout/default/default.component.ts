import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent {

  constructor(protected router: Router) {

  }

  //protected readonly authService = inject(AuthService);

  //protected user$ = this.authService.userinfo();

 /* logout() {
    this.authService.logout().subscribe({
      next: async () => {
        await this.router.navigate(['/login']);
      }
    })
  }*/

 }
