import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private timeout = 1800000; //30 min in milliseconds
  private currentUserId = '0';
  private loginTime = 0;
  private expiryTime = this.loginTime + this.timeout;

  constructor(
    private router: Router
  ) { }

  public logOut(): void {
    this.currentUserId = '0';
    this.loginTime = 0;
    this.router.navigate(['/login']);
  }

  public verifyLogin(userEmail: string, userPassword: string): boolean {
    // Current HardCode TODO
    // Call verifying service, and get true, then call DB and return currentUserId relative to email
    // https://www.mssqltips.com/sqlservertip/4037/storing-passwords-in-a-secure-way-in-a-sql-server-database/
    if (userEmail == 'ciscodg@gmail.com' && userPassword == 'password') {
      this.currentUserId == '12345';
      this.loginTime = (new Date).getTime();
      this.expiryTime = this.loginTime + this.timeout;
      return true;
    } else {
      this.loginTime = 0;
      return false;
    }

  }

  public validSession(): boolean {
    // check user
    if (+this.currentUserId > 0 && (this.expiryTime > (new Date).getTime())) {
      return true;
    } 
    return false;
  }

}
