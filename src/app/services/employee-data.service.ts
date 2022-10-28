import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private employees: Employee = {
    slNo: 1,
    name: 'John',
    age: 30,
    designation: 'Manager',
    doj: new Date(),
    salary: 10000
  }

  constructor() { }

  public getEmployee(): Employee {
    return this.employees;
  }
}
