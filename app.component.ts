// app.component.ts
import { Component } from '@angular/core';

import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  triggerObservable = new Subject();
    handleImage(webcamImage: WebcamImage) {
        console.log('received webcam image', webcamImage);
        }

        startButtonClass = 'start-button-green';
        stopButtonClass = 'stop-button-red';
        startLed = false;
        stopLed = false;

        start() {
        this.startLed = true;
        this.stopLed = false;
        this.startButtonClass = 'start-button-dark-green';
        this.stopButtonClass = 'stop-button-red';
        this.http.get('http://localhost:3000/on').subscribe(data => {
      console.log(data);
    });
        }

        stop() {
        this.startLed = false;
        this.stopLed = true;
        this.startButtonClass = 'start-button-green';
        this.stopButtonClass = 'stop-button-dark-red';
        this.http.get('http://localhost:3000/off').subscribe(data => {
      console.log(data);
    });
        }





        }

