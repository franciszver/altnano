import { Component } from '@angular/core';
import { LeftNavComponent } from "../left-nav/left-nav.component";
import { RightInfoComponent } from "../right-info/right-info.component";
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LeftNavComponent, RightInfoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) {}

  onInit() {
     // Checks if valid user, and then boots if not
     if (!this.loginService.validSession()) {
      this.router.navigate(['/login']);
    }
  }

  public logOff(): void {
    this.loginService.logOut();
  }


}
