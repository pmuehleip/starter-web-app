import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface Example {
  id: number;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) {
  }

  getExample(content: string): Observable<Example> {
    return this.http.get<Example>('/starter-web-services/example/' + content);
  }



}
