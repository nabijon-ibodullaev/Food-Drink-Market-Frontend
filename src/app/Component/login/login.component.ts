import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  loginUser(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth
      .loginUser(form.value.email, form.value.password)
      .subscribe((data) => {
        console.log(data.token);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/admin']);
      });
  }
}
