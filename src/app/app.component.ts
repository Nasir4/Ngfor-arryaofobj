import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstName = 'Nasir';
  lastName = 'Shaik';
  age = 28;
  gender = 'male';
  country = 'India';
  address = 'Nellore';
  receivenewsletters = true;

  changeData() {
    this.firstName = 'Asif';
    this.lastName = 'Shaik';
    this.age = 26;
    this.gender = 'male';
    this.country = 'India';
    this.receivenewsletters = false;
    this.address = 'Hyderabad';
  }
}
