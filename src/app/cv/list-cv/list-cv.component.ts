import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css'],
})
export class ListCvComponent {
  @Input() cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter<Cv>();

}
