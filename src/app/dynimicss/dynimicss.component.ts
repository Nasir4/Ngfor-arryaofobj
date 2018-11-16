import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynimicss',
  templateUrl: './dynimicss.component.html',
  styleUrls: ['./dynimicss.component.css']
})
export class DynimicssComponent implements OnInit {
  marks = 85;
  myColor = '';
  constructor() {
    // ngstyle

    // if (this.marks >= 35) {
    //   this.myColor = 'green';
    // } else {
    //   this.myColor = 'red';
    // }

    if (this.marks >= 35) {
      this.myColor = 'class1';
    } else {
      this.myColor = 'class2';
    }


  }

  ngOnInit() {
  }

}
