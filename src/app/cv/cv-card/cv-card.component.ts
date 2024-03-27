import { Component, Input, inject } from '@angular/core';
import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../service/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css'],
})
export class CvCardComponent {
  @Input() cv: Cv | null = null;
  embaucheService = inject(EmbaucheService);
  toaster = inject(ToastrService);
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)){
        this.toaster.success(`${this.cv.firstname} ${this.cv.name} a été embauché`);
      } else {
        this.toaster.warning(
          `${this.cv.firstname} ${this.cv.name} est déjà embauché`
        );
      }
    }
  }
}
