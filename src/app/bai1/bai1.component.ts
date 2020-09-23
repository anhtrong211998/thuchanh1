import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  x: number;
  n: number;
  tong=0;
  constructor() { }
  
  
  
  // @Output() tinhtongChanged: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    
      
  }
  //bai 1
  bai1(){
    let lt=1;
    this.tong = 0;
    for(var i = 1; i <= this.n; i++){
      lt = lt * this.x;
      this.tong += lt;
    }
    console.log(this.tong);
  }

}
