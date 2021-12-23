import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';






@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  
  
  
  constructor(public service:EmployeeService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getEmployeeData()
  }

  displayedColumns: string[] = ['id','name', 'age', 'salary','action'];
  dataSource = this.service.list;
  fromValue:FormGroup
  
  

  // updateRowData(row_obj){

  //   this.dataSource = this.dataSource.filter((value,key)=>{
  //     if(value.id = row_obj.id){
  //       value.name = row_obj.name;
  //       value.age = row_obj.age;
  //       value.salary = row_obj.this.salary;
  //     }
  //     return true;
  //   });
  // }
  DeleteEmployee(id:number){
   
      this.service.deleteEmployee(id)
      .subscribe(
        res=>{
          this.service.getEmployeeData();
       
        },
        err=>{
          alert("Failed")
        }
      );
    
  }


  onSubmit(form:NgForm){
    this.service.postEmployeeDetail()
    .subscribe(
    res => {alert("Success..!!")
    
  },
    err => {alert("Failed..!!")}
    )
    }
    editModeToggle =false;

    edit() {
      this.editModeToggle = true;
      this.dataSource = JSON.parse(JSON.stringify(this.dataSource)); 
    }





    @ViewChild(MatTable,{static:true}) table: MatTable<any>;

    
  
   
  
      
  
    addRowData(row_obj){
      var d = new Date();
      // this.dataSource.push({
      //   id:d.getTime(),
      //   name:row_obj.name
      // });
      this.table.renderRows();
      
    }
    updateRowData(row_obj){
      this.dataSource = this.dataSource.filter((value,key)=>{
        if(value.id == row_obj.id){
          value.name = row_obj.name;
        }
        return true;
      });
    }
    deleteRowData(row_obj){
      this.dataSource = this.dataSource.filter((value,key)=>{
        return value.id != row_obj.id;
      });
    }
  }
  

  






