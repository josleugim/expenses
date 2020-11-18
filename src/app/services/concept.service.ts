import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class ConceptService {

  constructor(private http: HttpClient) { }

  getConcepts(): Observable<any> {
    return this.http.get(`${Constants.API}/concept`);
  }

  updateByUuid(body): Observable<any> {
    return this.http.put(`${Constants.API}/concept`, body);
  }
}
