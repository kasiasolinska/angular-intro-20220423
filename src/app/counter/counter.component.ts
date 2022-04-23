import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public value = 123; 
  public text = 'ala ma kota';

  onClick () {
    this.text = 'asd';

  }

increment() {
  this.value++;
}

decrement() {
  this.value--;
}

  constructor() { }

  ngOnInit(): void {
  }

}
