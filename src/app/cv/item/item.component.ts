import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() size = 50;
  @Input({ required: true })
  cv!: Cv;
  @Output()
  selectCvEvent = new EventEmitter<Cv>();
  selectCv() {
    this.selectCvEvent.emit(this.cv);
  }
}
