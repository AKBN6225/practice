import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-binding-amount-range',
  templateUrl: './forms-binding-amount-range.component.html',
  styleUrls: ['./forms-binding-amount-range.component.scss']
})
export class FormsBindingAmountRangeComponent implements OnInit {

  public amount: string = "500000";

  constructor() { }

  ngOnInit(): void {
  }

}
