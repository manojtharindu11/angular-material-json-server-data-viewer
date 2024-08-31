import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  education: string[] = ['Matrix', 'Diploma', 'Intermediate', 'Post Graduate'];

  constructor(
    private _formBuilder: FormBuilder,
    private empService: EmployeeService,
    private _dialogRef: DialogRef<EmpAddEditComponent>
  ) {
    this.empForm = _formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      education: '',
      companyName: '',
      experience: '',
      package: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this.empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee added successfully.');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }

  closePopup() {
    this._dialogRef.close();
  }
}
