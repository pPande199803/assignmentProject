import { NgModule } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [

  {
    path:'',
    component:EmployeeFormComponent
  },
  {
    path:'show',
    component:EmployeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
