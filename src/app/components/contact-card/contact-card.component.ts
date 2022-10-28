import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() selectedContact:any;

  constructor() { }

  ngOnInit(): void {
  }

  public isNotEmpty(){
    return Object.keys(this.selectedContact).length > 0;
  }

}
