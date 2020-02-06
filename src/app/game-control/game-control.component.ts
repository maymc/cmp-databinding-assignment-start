import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  //make this listenable from outside the component w/@Output
  @Output() intervalFired = new EventEmitter<number>();
  interval;   //store setinterval in a property to start and clear it
  lastNumber = 0;

  constructor() { }

  ngOnInit() { }

  onStartGame() {
    console.log("setting interval");

    this.interval = setInterval(() => {
      //emit an event
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);

  }

  onStopGame() {
    console.log("clearing interval");
    clearInterval(this.interval);
  }
}