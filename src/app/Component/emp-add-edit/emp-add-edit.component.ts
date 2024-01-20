import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Post Graduate'
  ];

  constructor(private _formBuilder:FormBuilder,
    private empService:EmployeeService,
    private _dialogRef:MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _coreService: CoreService){
      this.empForm = _formBuilder.group({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        education: '',
        companyName: '',
        experience: '',
        package: ''
      });
  }

  onFormSubmit(){
    if (this.empForm.valid) {
      if (this.data){
        this.empService.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar("Employee details updated successfully!");
            this._dialogRef.close(true);
          },
          error: (err:any) => {
            console.log(err);
          }
        });
      } else {
        this.empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar("Employee added successfully!");
            this._dialogRef.close(true);
          },
          error: (err:any) => {
            console.log(err);
          }
        });
      }

      
    }
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
}