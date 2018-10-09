import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userCredintal = {
    email: '',
    password: ''
  };
  Errors: '';
  constructor(public router: Router, public afAuth: AuthService) { }

  ngOnInit() {

  }
  LoginFunction() {
    this.afAuth.LoginWithEmail(this.userCredintal).then((result) => {
      console.log('loggin success');
      this.router.navigate(['/home']);
    }).catch((error) => {
      console.log(error.message);
      this.Errors = error.message;
      this.router.navigate(['/login']);
    });
  }
  clearErrors() {
    this.Errors = '';
  }
}
