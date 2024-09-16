import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Documentation: https://getbootstrap.com/docs/4.0/components/forms/

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public formInputEmail = '';
  public formInputPassword = '';
  public loginFail = false;
  public maxLoginFail = false; // Warn Risk locking consider reset password, email help 
  private loginAttempts = 0;
  private loginMax = 10;

  constructor(
    private loginService: LoginServiceService,
    private router: Router,
  ) {}

  public login(): void {
    // TODO SANITIZE INPUT!!!!!!, remove semicolons and dont allow them in passwords

    let check = this.loginService.verifyLogin(this.formInputEmail, this.formInputPassword);
    console.log(this.formInputEmail, this.formInputPassword, check);
    if (check) {
      this.router.navigate(['/dashboard']);
      this.maxLoginFail = false;
      this.loginFail = false;
    } else {
      this.loginFail = true;
      this.loginAttempts++;
      if (this.loginAttempts > this.loginMax) {
        this.maxLoginFail = true;
      }
    }
  }

}
