import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  list: Employee[];
  constructor(private service: EmployeeService,
    private firestore: AngularFirestore,
    private toster: ToastrService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe((res) => {
      this.list = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee;
      });
    });
  }

  onEdit(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }
  delete(id) {
    if (confirm('Are You Sure Delet This Record ?')) {
      this.firestore.doc('myemployees/' + id).delete();
      this.toster.warning('Deleted Succesfully', 'EMP Register');
    }
  }

}
