import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
  // Here we are importing interface from the models folder of employee.ts

import { EmployeeDataService } from 'src/app/services/employee-data.service';  


@Component({
  selector: 'app-angular-services-models',
  templateUrl: './angular-services-models.component.html',
  styleUrls: ['./angular-services-models.component.scss']
})
export class AngularServicesModelsComponent implements OnInit {

  public data: Employee = {} as Employee;

  constructor(
    private employeServiceAssigned : EmployeeDataService,
    // Here we are creating an object of the service class
    // and assigning it to the variable employeServiceAssigned
    // This is called dependency injection
  ) { }

  ngOnInit(): void {
    this.data = this.employeServiceAssigned.getEmployee();
  }

}
