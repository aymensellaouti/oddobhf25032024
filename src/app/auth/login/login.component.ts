import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { CredentialsDto } from '../dto/credentials.dto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.id);
        this.router.navigate(['cv']);
      },
      error: (err: Error) => {
        this.toastr.error('veuillez vérifier vos credentials');
      },
    });
  }
}
