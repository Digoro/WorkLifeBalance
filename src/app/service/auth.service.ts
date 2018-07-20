import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {
  }

  signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  signOut() {
    return this.afAuth.auth.signOut().then(res => {
      this.router.navigate(['/signIn'])
    })
  }

  getCurrentUserToken() {
    firebase.auth().currentUser.getIdToken().then(token => {
      localStorage.setItem('isLoggedIn', token);
    });
    return localStorage.getItem('isLoggedIn');
  }

  isAuthenticated() {
    return (localStorage.getItem('isLoggedIn')) ? true : false;
  }
}
