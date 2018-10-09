import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public afAuth: AuthService, public router: Router) { }

  ngOnInit() {
    this.afAuth.getAuthentication().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        console.log('LoggedIn' + this.isLoggedIn);
        // console.log('Register' + this.enableRegister);
        // console.log('Email' + this.emailUserLoggedIn);
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  SignOut() {
    this.afAuth.LogoutFunction();
    this.router.navigate(['\login']);
  }

}
