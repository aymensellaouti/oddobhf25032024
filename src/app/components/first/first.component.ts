import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = 'aymen';
  isHidden = false;
  message = '';
  colors = ['red', 'green', 'yellow', 'white'];
  color = this.colors[0];
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
  constructor() {
    let index = 0;
    setInterval(() => {
      this.color = this.colors[index++ % this.colors.length];
      this.name = 'ameni';
      this.isHidden = !this.isHidden;
    }, 1500);
  }
}


//  class :
// behaviour: methods
// state : attributs
