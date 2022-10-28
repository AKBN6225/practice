import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {
  obtainedData: any;

  @Output() sendContact = new EventEmitter();

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.callingDataFromServer();
  }

  callingDataFromServer(){
    this.contactService.getAllContacts().subscribe((data) => {
      this.obtainedData = data;
    })
  }

  public onSelect(x:any){
    // alert(x.name.first);
    this.sendContact.emit(x);
  }

}
