import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

export  interface TodoApi {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


@Injectable({providedIn: 'root'})
export class HttpService {
  http = inject(HttpClient);

  testGet(): Observable<TodoApi[]> {
    return this.http.get<TodoApi[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
