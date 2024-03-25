import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  template: `
    <p (click)="changeValue()">{{ two }}</p>
    <input type="text" [(ngModel)]="two" />
  `,
  styleUrls: ['./twoway.component.css'],
})
export class TwowayComponent {
  two = 'init value';
  changeValue() {
    this.two = 'valeur jdida';
  }
}
