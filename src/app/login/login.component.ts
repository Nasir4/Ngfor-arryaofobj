import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  msg = '';

  CheckLogin(u) {
    if (this.username === 'admin' && this.password === '12345') {
      this.msg = 'Successfully LogIn';
      this.username = '';
      this.password = '';
    } else {
      this.msg = 'Login Id Not Matched';
      u.focus();
      this.username = '';
      this.password = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
