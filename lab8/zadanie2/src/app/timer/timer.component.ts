import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <div>
    <h1>Timer App</h1>
    <h2>Timer: {{ displayTime }}</h2>
    <app-pause (start)="startTimer()" (stop)="stopTimer()"></app-pause>
    <app-reset (reset)="resetTimer()"></app-reset>
   
  </div>
  `,
  styles: [
    `
      div {
        text-align: center;
        margin: 20px;
      }

      button {
        margin: 5px;
      }
    `,
  ],
})
export class TimerComponent implements OnDestroy {
  displayTime: string = '00:00:00';
  timerRunning: boolean = false;
  private timer: any;
  private startTime: number = 0;
  private elapsedTime: number = 0;

  startTimer() {
    if (!this.timerRunning) {
      this.startTime = Date.now() - (this.elapsedTime || 0);
      this.timer = setInterval(() => {
        this.updateDisplayTime();
      }, 1000);
      this.timerRunning = true;
    }
  }

  stopTimer() {
    if (this.timerRunning) {
      clearInterval(this.timer);
      this.elapsedTime = Date.now() - this.startTime;
      this.timerRunning = false;
    }
  }

  resetTimer() {
    this.stopTimer();
    this.displayTime = '00:00:00';
    this.startTime = 0;
    this.elapsedTime = 0;
  }

  private updateDisplayTime() {
    const elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
    const hours = this.padTime(Math.floor(elapsedSeconds / 3600));
    const minutes = this.padTime(Math.floor((elapsedSeconds % 3600) / 60));
    const seconds = this.padTime(elapsedSeconds % 60);
    this.displayTime = `${hours}:${minutes}:${seconds}`;
  }

  private padTime(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  ngOnDestroy() {
    this.stopTimer();
  }
}