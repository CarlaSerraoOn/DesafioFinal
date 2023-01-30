// app.component.ts
import { Component } from '@angular/core';

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

  toggle() {
    this.buttonText = this.buttonText === 'Start' ? 'Stop' : 'Start';
  }
}
