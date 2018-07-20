import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signIn',
  templateUrl: './signIn.component.html',
})
export class SignInComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() { }

  signIn() {
    this.auth.signIn().then(data => {
      this.auth.getCurrentUserToken();
      this.router.navigate(['/home']);
    })
  }
}
