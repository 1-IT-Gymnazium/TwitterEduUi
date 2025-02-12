import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'token-confirmation-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './token-confirmation-page.component.html',
  styleUrl: './token-confirmation-page.component.scss'
})
export class TokenConfirmationPageComponent implements OnInit {
  protected readonly fb = inject(FormBuilder);

  protected readonly authService = inject(AuthService);

  protected readonly router = inject(Router);
  private route = inject(ActivatedRoute);
  protected email?: string | null;
  protected token?: string | null;

  protected formular = this.fb.group({
    email: new FormControl('', { nonNullable: true}),
    password: new FormControl('', { nonNullable: true})
  });

  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<boolean>(false);

  ngOnInit(){
    const queryParams = this.route.snapshot.queryParams;
    this.token = queryParams['token'] ? decodeURIComponent(queryParams['token']) : null;
    this.email = queryParams['email'] || null;
  }
  confirmEmail(){
    let t = this.token ? this.token : "";
    let e = this.email ? this.email : "";
    this.authService.confirmToken(t, e);
  }
  
}