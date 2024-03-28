import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent {

  httpService = inject(HttpService);

  constructor() {
    this.httpService.testGet().subscribe({
      next: (todos) => console.log(todos),
      error: (err) => console.log(err),
      complete: () => console.log('complete')
    })
  }
}
