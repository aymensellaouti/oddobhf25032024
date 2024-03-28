import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {

  constructor(private toastr: ToastrService) {
    const observable = new Observable<number>((observer) => {
       let i = 5;
       const intervalIndex = setInterval(() => {
         if (!i) {
           observer.complete();
           clearInterval(intervalIndex);
         } else {
           observer.next(i--);
         }
       }, 1000);
     });
     observable.subscribe((val) => {
       console.log(val);
     });

     observable
     // 5 4 3 2 1
     .pipe(
      map( data => data * 3),
      // 15 12 9 6 3
      filter( data => data % 2 == 0)
      // 12 6
     )
     .subscribe({
      next: (val) => {
        this.toastr.info(''+val)
      },
      complete: () => {
        this.toastr.warning('BOOOOOM!!!!');
      }
     });

  }
}
