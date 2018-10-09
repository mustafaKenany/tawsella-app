import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  itemList: AngularFireList<any>;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.itemList = db.list('users');
  }
  signUpwithEmil(information) {
    this.itemList.push({
      name: information.name,
      username: information.userName,
    });
  }

  LoginWithEmail(data) {
    return new Promise((resolve, rejact) => {
      this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password).then(
        userData => resolve(userData), _error => rejact(_error)
      );
    });
  }

  getAuthentication() {
    return this.afAuth.authState;
  }

  LogoutFunction() {
    this.afAuth.auth.signOut();
  }
}
