import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userData =
    {
      name: '',
      email: '',
      password: ''
    };
  name: string;
  constructor(public authenticationService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  signUpFunction() {
    // this.authenticationService.signUpwithEmil(this.userData).then(
    //   (result) => {
    //     console.log('loggin success');
    //     this.router.navigate(['/home']);
    //   }).catch((err) => {
    //     console.log(err.message);
    //     this.router.navigate(['/register']);
    //   });
    this.authenticationService.signUpwithEmil(this.userData);
    console.log(this.userData);
  }

}
