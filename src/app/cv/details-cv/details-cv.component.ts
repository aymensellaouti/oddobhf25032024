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
    this.cvService.getCvById(id)
    .subscribe({
      next: (cvFromApi) => {
        this.cv = cvFromApi;
      },
      error: (err) => {
        this.router.navigate(['cv']);
      },
    });
  }

  deleteCv() {
    if (this.cv) {
     this.cvService.deleteCvById(this.cv.id).subscribe({
      next: () => {this.router.navigate(['cv']);},
      error: (e) => {
        console.log(e);
      },
     })

    }
  }
}
