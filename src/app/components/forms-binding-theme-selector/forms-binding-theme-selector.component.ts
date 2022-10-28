import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-binding-theme-selector',
  templateUrl: './forms-binding-theme-selector.component.html',
  styleUrls: ['./forms-binding-theme-selector.component.scss']
})
export class FormsBindingThemeSelectorComponent implements OnInit {

  public darkTheme:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
