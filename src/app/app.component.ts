import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './Component/emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CoreService } from './core/core.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'gender',
    'email',
    'education',
    'experience',
    'package',
    'companyName',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  title = 'Crud-app';

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService
  ) {}

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (res) => {
          if (res) {
            this.getEmployeeList();
          }
      }
    })
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteemployee(id: string) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res:any) => {
        this._coreService.openSnackBar("Employee deleted successfully!","done");
        this.getEmployeeList();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  openEditForm(data: any){
    const dialogRef = this._dialog.open(EmpAddEditComponent,{
      data
    });
    dialogRef.afterClosed().subscribe({
      next: (res) => {
          if (res) {
            this.getEmployeeList();
          }
      }
    })
  }
}
