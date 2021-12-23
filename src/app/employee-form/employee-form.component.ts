import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, NgForm, Validators} from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
myForm:NgForm;

  name = new FormControl('', [Validators.required], );
  age = new FormControl('', [Validators.required,AgeValidator]);
  salary = new FormControl('', [Validators.required]);
  constructor(public service:EmployeeService) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }
  getErrorMessage1() {
    if (this.name.hasError('required')) {
      return '*Age should not be more than 18 years';
    }

    return this.name.hasError('age') ? 'Not a valid age' : '';
  }
  getErrorMessage2() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('salary') ? 'Not a valid salary' : '';
  }

  onSubmit(form){
    this.service.postEmployeeDetail()
    .subscribe(
      res => {alert("Success..!!")
    
      
    },
    
    err => {alert("Failed..!!")}
    )
    
  }
    
}




export function AgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value < 18) {
    return { 'age': true };
  }
  return null;
}
