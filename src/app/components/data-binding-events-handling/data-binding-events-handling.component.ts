import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-events-handling',
  templateUrl: './data-binding-events-handling.component.html',
  styleUrls: ['./data-binding-events-handling.component.scss']
})
export class DataBindingEventsHandlingComponent implements OnInit {
  public message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public updateMessage(msg: string): void {
    this.message = msg;
  }

}
