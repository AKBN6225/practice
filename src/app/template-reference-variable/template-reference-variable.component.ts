import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.scss']
})
export class TemplateReferenceVariableComponent implements OnInit {

  value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getValue(variable:any){
    this.value = variable.value;
  }

}
