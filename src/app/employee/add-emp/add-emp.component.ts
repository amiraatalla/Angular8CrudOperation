import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
})
export class AddEmpComponent implements OnInit {
  constructor(
    public dialogbox: MatDialogRef<AddEmpComponent>,
    public service: EmployeeService,
    private snackBar: MatSnackBar
  ) {}

  public listItems: Array<string> = [];

  ngOnInit(): void {
    this.resetForm();
    // this.dropdownRefresh();
  }

  // dropdownRefresh() {
  //   this.service.getDepDropDownValues().subscribe((data) => {
  //     data.forEach((element) => {
  //       this.listItems.push(element['DepartmentName']);
  //     });
  //   });
  // }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();

    this.service.formData = {
      id: '',
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
    };
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Register click');
  }
  onSubmit(form: NgForm) {
    this.service.addEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      this.snackBar.open(res.toString(), '', {
        duration: 300,
        verticalPosition: 'top',
      });
    });
  }
}