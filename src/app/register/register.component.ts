import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  confpassword = '';
  acceptLicenceAgrument = false;
  gender = '';
  country = '';
  msg = '';

  Regestclick() {
    this.msg = 'UserName: ' + this.username + '<br>Password: ' + this.password + '<br>Confirm Password:' +
      this.confpassword + '<br>Accept License Agreement: ' + this.acceptLicenceAgrument + '<br>Gender: ' +
      this.gender + '<br>Country:' + this.country;
  }
  constructor() { }

  ngOnInit() {
  }

}
