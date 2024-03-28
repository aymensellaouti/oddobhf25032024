import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cv } from '../models/cv.model';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() size = 50;
  @Input({ required: true })
  cv!: Cv;
  cvService = inject(CvService);
  // @Output()
  // selectCvEvent = new EventEmitter<Cv>();
  selectCv() {
    this.cvService.selectCv(this.cv);
    // this.selectCvEvent.emit(this.cv);
  }
}
