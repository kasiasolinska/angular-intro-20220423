import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  public time = Date.now();

  constructor() { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = Date.now();
      console.log(this.time)

    }, 10);
  }

}
