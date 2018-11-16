import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [
    new Employee(1, 'Nasir', 80000),
    new Employee(2, 'Asif', 40000),
    new Employee(3, 'Hakeem', 50000),
    new Employee(4, 'Sam', 30000),
    new Employee(5, 'Krish', 20000),
  ];

  newEmployee: Employee = new Employee(null, null, null);

  onInsert() {
    this.employees.push(new Employee(this.newEmployee.empId, this.newEmployee.empName, this.newEmployee.salary));
    this.newEmployee.empId = null;
    this.newEmployee.empName = null;
    this.newEmployee.salary = null;
  }
  onDelet(n) {
    if (confirm('Are You Sure You Want To Delete?')) {
      this.employees.splice(n, 1);
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
