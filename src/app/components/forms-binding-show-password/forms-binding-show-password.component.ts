import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-binding-show-password',
  templateUrl: './forms-binding-show-password.component.html',
  styleUrls: ['./forms-binding-show-password.component.scss']
})
export class FormsBindingShowPasswordComponent implements OnInit {

  public passwordType: string = 'password';

  constructor() { }

  ngOnInit(): void {
  }

  // public updateType(event: any) {
  //   if(event.target.checked === true){
  //     this.passwordType = 'text';
  //   }else{
  //     this.passwordType = 'password';
  //   }
  // }

  public updateType(event: any) {
    this.passwordType = event.target.checked === true ? 'text' : 'password';
  }

}
