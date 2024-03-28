import { Component } from '@angular/core';
import { Cv } from '../models/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
  cvs: Cv[] = [];
  // helloService = new SayHelloService();
  selectedCv: Cv | null = null;
  // 7achti bel loggerService
  constructor(
    private loggerService: LoggerService,
    private helloService: SayHelloService,
    private toastr: ToastrService,
    private  cvService: CvService
  ) {
    this.helloService.hello();
    this.loggerService.logger('cc je suis le CvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');
    this.cvs = this.cvService.getCvs();
    this.cvService.selectCvSubject.subscribe({
      next: (cv) => this.selectedCv = cv,
    })
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
