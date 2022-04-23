import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public value = 10; 
  public text = 'ala ma kota';

  onClick () {
    this.text = 'asd';

  }

increment() {
  this.value+=10;
}

decrement() {
  this.value-=10;
}

  constructor() { }

  ngOnInit(): void {
  }

}
