import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeData : Employee = new Employee();

  list : Employee[];

  constructor(private http:HttpClient) { }


  readonly baseURL = "http://localhost:55808/api/Employees";
  readonly baseURL2 = " http://localhost:55808/api/Employees";
 


  getEmployeeData(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Employee[]); //only url is passed as no parameters are required.
  
    
     }
    

      deleteEmployee(id:number){
       return this.http.delete("http://localhost:55808/api/Employees/" + id);
        }


        putEmployeeDetails(id:number){
          this.http.put("http://localhost:55808/api/Employees/"+id,this.employeeData);
          }


          postEmployeeDetail(){
            return this.http.post(this.baseURL,this.employeeData);
            }
}
