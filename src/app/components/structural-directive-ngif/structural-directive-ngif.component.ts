import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngif',
  templateUrl: './structural-directive-ngif.component.html',
  styleUrls: ['./structural-directive-ngif.component.scss']
})
export class StructuralDirectiveNgifComponent implements OnInit {

  login:boolean = true;
  logout:boolean = false;

  loginButton:boolean = true;
  logoutButton:boolean = false;
  candidate:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public loggedIn(){
    this.logoutButton = true;
    this.loginButton = false;
    this.candidate = true;
    this.login = false;
  }

  public loggedOut(){
    this.logoutButton = false;
    this.loginButton = true;
    this.candidate = false;
    this.login = true;
  }

}
