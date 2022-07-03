import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const BACKEND_URL = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: any;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  private isAdminStatusListener = new Subject<boolean>();
  constructor(private router: Router, private http: HttpClient) {}

  getIsAdminStatusListener() {
    return this.isAdminStatusListener.asObservable();
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getIsLoggedIn() {
    return this._isLoggedIn.asObservable();
  }

  // Sign-in
  signIn(user: any) {
    return this.http
      .post<{ token: string }>(BACKEND_URL + 'auth', user)
      .subscribe(
        (res) => {
          const token = res.token;
          this.router.navigate(['/']);
          if (res.token) {
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.saveAuthData(res.token);
            this._isLoggedIn.next(true);
          } else {
            this.isAuthenticated = false;
            this.authStatusListener.next(false);
          }
          if (this.getCurrentUser.isAdmin === true) {
            this.isAdminStatusListener.next(true);
          } else {
            this.isAdminStatusListener.next(false);
          }
        },
        () => {
          this.authStatusListener.next(false);
        }
      );
  }

  private saveAuthData(token: string) {
    localStorage.setItem('token', token);
  }
  private clearAuthData() {
    localStorage.removeItem('token');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    return { token: token };
  }

  logOut() {
    this.router.navigate(['/']);
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.isAdminStatusListener.next(false);
    this.clearAuthData();
    localStorage.removeItem('isAuth');
    this._isLoggedIn.next(false);
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  get getCurrentUser() {
    let token = localStorage.getItem('token');

    if (!token) {
      return false;
    } else {
      let helper = new JwtHelperService().decodeToken(token);
      return helper;
    }
  }
}
