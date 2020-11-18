import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  post(expenseData): Observable<any> {
    return this.http.post(`${Constants.API}/expense`, expenseData);
  }

  getExpenses(): Observable<any> {
    return this.http.get(`${Constants.API}/expense`);
  }

  deleteExpense(id): Observable<any> {
    return this.http.delete(`${Constants.API}/expense?id=${id}`);
  }
}
