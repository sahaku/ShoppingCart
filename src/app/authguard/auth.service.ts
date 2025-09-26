import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  constructor() { }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  login(): void {
    this.isLoggedIn = true;
  }
  logOut(): void {
    this.isLoggedIn = false;
  }
}
