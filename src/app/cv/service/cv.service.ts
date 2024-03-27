import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'Ameni', 'ben Arab', 'QA', '', '1234', 35),
      new Cv(2, 'Amine', 'Nouri', 'Dev', '     ', '1235', 20),
      new Cv(
        3,
        'Riadh',
        'Kort',
        'Dev',
        'rotating_card_profile3.png',
        '1235',
        37
      ),
      new Cv(
        4,
        'Oumaima',
        'Nasr',
        'Dev',
        'rotating_card_profile.png',
        '1236',
        20
      ),
    ];
  }
  /**
   * Retourne la liste des cvs
   */
  getCvs(): Cv[] {
    return this.cvs;
  }
}
