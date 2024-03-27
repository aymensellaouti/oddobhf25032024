import { Component } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent {
  cv!: Cv;
}
