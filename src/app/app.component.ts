import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './Component/emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'Crud-app'
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'dateOfBirth',
    'gender',
    'education',
    'experience',
    'companyName',
    'package',
  ];

  employeeList : any[] = [];

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService
  ) {}

  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent);
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res: any) => {
        console.log(res);
        if (res != null)
          this.employeeList = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getEmployeeList();
  }
}
