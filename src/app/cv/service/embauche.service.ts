import { Injectable } from '@angular/core';
import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embuachees: Cv[] = [];
  constructor() {}
  /**
   * Retourne la liste des personnes embauchees
   */
  getEmbauchees(): Cv[] {
    return this.embuachees;
  }

  /**
   * Embauche une personne
   * @param cv : Cv, le Cv à embaucher
   * @returns boolean : true si le cv est embauché false sinon
   */
  embaucher(cv: Cv): boolean {
    if (this.embuachees.indexOf(cv) === -1) {
      this.embuachees.push(cv);
      return true;
    }
    return false;
  }
}
