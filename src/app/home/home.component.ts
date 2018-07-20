import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() { }

  signOut() {
    this.auth.signOut();
  }
}
