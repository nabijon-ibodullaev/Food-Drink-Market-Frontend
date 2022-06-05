import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../Models/sign-up';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: any;
  isUserLoggedIn: boolean = false;
  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
  }
  registerUser(name: string, email: string, password: any) {
    const authData: SignUp = { name: name, email: email, password: password };
    return this.http
      .post<any>('http://localhost:3000/api/user', authData)
      .subscribe((res) => {
        console.log(res);
      });
  }
  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }
  profile() {}

  loginUser(email: string, password: any) {
    const user: Login = { email: email, password: password };
    localStorage.setItem(
      'isUserLoggedIn',
      this.isUserLoggedIn ? 'true' : 'false'
    );
    return this.http.post<{ token: string }>(
      'http://localhost:3000/api/auth',
      user
    );
  }
}
