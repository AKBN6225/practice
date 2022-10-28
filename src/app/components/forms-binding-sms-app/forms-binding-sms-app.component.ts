import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-binding-sms-app',
  templateUrl: './forms-binding-sms-app.component.html',
  styleUrls: ['./forms-binding-sms-app.component.scss']
})
export class FormsBindingSmsAppComponent implements OnInit {

  public message: string = "";
  public maxCharactersCount: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  alertMsg(event: any) {
    console.log(event.target.value.length,"checking");
    if(event.target.value.length >= this.maxCharactersCount) {
      alert("You have exceeded the maximum characters count");
    }
  }
    
  }


