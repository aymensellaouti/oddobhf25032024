import { Injectable, inject } from '@angular/core';
import { Cv } from '../models/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  selectCvSubject = new Subject<Cv>();
  http = inject(HttpClient);
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
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  /**
   * Retourne la liste des cvs
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   * Retourne le cv par son id
   */
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  /**
   * supprime le cv par son id
   */
  deleteCvById(id: number): Observable<any> {

    return this.http.delete(APP_API.cv + id);
  }

  /**
   * Retourne le cv par son id
   */
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   * Supprime le cv passé en paramètre
   */
  deleteCv(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    this.cvs.splice(index, 1);
  }

  /**
   * Elle va notifier tous les subscribers avec le nouveau
   * Cv séléctionné
   * @param cv
   */
  selectCv(cv: Cv): void {
    this.selectCvSubject.next(cv);
  }
}
