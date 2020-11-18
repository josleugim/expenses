import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Constants } from '../common/constants';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${Constants.API}/category`);
  }

  post(categoryData): Observable<any> {
    return this.http.post(`${Constants.API}/category`, categoryData);
  }
}
