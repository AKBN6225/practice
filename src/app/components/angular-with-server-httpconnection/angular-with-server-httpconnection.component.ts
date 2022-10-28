import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-angular-with-server-httpconnection',
  templateUrl: './angular-with-server-httpconnection.component.html',
  styleUrls: ['./angular-with-server-httpconnection.component.scss']
})
export class AngularWithServerHTTPConnectionComponent implements OnInit {
  
  public users:User[]=[] as User[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }

  public getUsers(){
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users=data;
    })
  }

}
