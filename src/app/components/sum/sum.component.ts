import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css'],
})
export class SumComponent {
  @Input() x = 0;
  @Input() y = 0;
}
