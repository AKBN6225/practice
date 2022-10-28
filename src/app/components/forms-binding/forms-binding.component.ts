import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-binding',
  templateUrl: './forms-binding.component.html',
  styleUrls: ['./forms-binding.component.scss']
})
export class FormsBindingComponent implements OnInit {
  public userName: string = 'Shivaji';
  
  public javaScript2wayBinding: string = "";

  public angularAutoBinding: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public update(e:any){
    this.javaScript2wayBinding = e.target.value;
  }

}
