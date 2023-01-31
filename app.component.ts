// app.component.ts
import { Component } from '@angular/core';

import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  buttonText = 'Start';
  buttonColor = 'red';


  toggle() {
    if (this.buttonText === 'Start') {
      this.buttonText = 'Stop';
      this.buttonColor = 'red';
    } else {
      this.buttonText = 'Start';
      this.buttonColor = 'green';
    }
  }

  triggerObservable = new Subject();
    handleImage(webcamImage: WebcamImage) {
        console.log('received webcam image', webcamImage);
        }
  
}
