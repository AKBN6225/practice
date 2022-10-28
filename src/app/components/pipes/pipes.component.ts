import { Component, OnInit } from '@angular/core';

interface Employee {
  slNo: number;
  name: string;
  designation: string;
  age: number;
  salary: number;
  doj: Date;
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public emplyees: Employee = {
    slNo: 1,
    name: 'arun',
    designation: 'developer',
    age: 25,
    salary: 50000,
    doj: new Date('2021-01-01')
  }

}
