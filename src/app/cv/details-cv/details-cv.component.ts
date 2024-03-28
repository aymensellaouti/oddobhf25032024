import { Component, inject } from '@angular/core';
import { Cv } from '../models/cv.model';
import { CvService } from '../service/cv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent {
  cv!: Cv | null;
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    console.log(this.acr.snapshot);
     this.acr.snapshot;
    // On a révupérer le paramètre de la route
    const id = this.acr.snapshot.params['id'];
    // je cherche le cv d'id id
    this.cv = this.cvService.getCvById(id);
    // s'il n'existe pas je redirige vers cv
    if (!this.cv) {
      this.router.navigate(['cv']);
    }
  }

  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate(['cv']);
    }
  }
}
