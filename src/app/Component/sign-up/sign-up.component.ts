import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  registerData: any = {};
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  SignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.registerUser(
      form.value.name,
      form.value.email,
      form.value.password
    );
  }
}
