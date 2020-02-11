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
      //emit an event function on each tick
      //emit an incrementing number
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++; //this keeps track of the last emitted number was if the game was paused
    }, 1000);

  }

  onStopGame() {
    console.log("clearing interval");
    clearInterval(this.interval);
  }
}