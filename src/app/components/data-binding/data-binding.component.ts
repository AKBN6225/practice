import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public dish: string = 'Bamboo Chicken';
  public tourImage: string = 'https://media.istockphoto.com/photos/bamboo-chicken-chicken-cooked-in-bamboorice-cooked-in-bamboobongu-picture-id1396520543?b=1&k=20&m=1396520543&s=612x612&w=0&h=YY6Gz-gvfDpeElQfi6_KGrysOf8ao4bktn_EuIFwy-U=';
  public time: string = new Date().toLocaleTimeString();

  // events Binding

  public count: number = 0;

  constructor() {
    this.updateTime();
   }

  ngOnInit(): void {
  }

  public getDate(): string {
    return new Date().toLocaleDateString();
  }

  // public getTime(): string {
  //   return new Date().toLocaleTimeString();
  // }

  public updateTime(): void{
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    },1000)
  }

  public incrementCount(): void {
    this.count++;
  }

  public decrementCount(): void {
    this.count-- > 0 ? this.count : this.count = 0;
  }
}
