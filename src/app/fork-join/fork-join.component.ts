import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let p = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(5)
      },5000)
    })

    let p1 = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(10)
      },10000)
    })

    const combined$ = forkJoin([p,p1]).subscribe((res) =>{
      console.log(res);
    })

    console.log(combined$);
    
  }



}
