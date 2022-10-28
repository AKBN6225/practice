import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  password: string;
  designation: string;
  bio: string;
  terms: boolean;
}

@Component({
  selector: 'app-forms-registration-form',
  templateUrl: './forms-registration-form.component.html',
  styleUrls: ['./forms-registration-form.component.scss']
})
export class FormsRegistrationFormComponent implements OnInit {

  name:string = '';
  email:string = '';
  password:string = '';
  designation:string = '';
  bio:string = '';
  terms:boolean = false;

  public disableButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public user: User = {
    name: '',
    email: '',
    password: '',
    designation: '',
    bio: '',
    terms: false
  }

  public onSubmit(){
    console.log(this.user);
  }

  // buttonEnable(){
  //   console.log("hello");
    
  //   if(this.name !== '' && this.email !== '' && this.password !== '' && this.designation !== '' && this.bio !== '' && this.terms !== false){
  //     this.disableButton = false;
  //   }
  // }

}
