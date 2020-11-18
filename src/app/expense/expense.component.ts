import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ExpenseService } from '../services/expense.service';
import { IExpense } from '../interfaces/iexpense';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.sass']
})
export class ExpenseComponent implements OnInit {
  public expenseForm: FormGroup;
  private selectedConceptUuid: string;
  public expenses: Observable<IExpense[]>;
  public totalExpensesAmount: number;

  constructor(private formBuilder: FormBuilder, private expenseService: ExpenseService) {
    this.expenseForm = this.formBuilder.group({
      conceptId: '',
      amount: 0,
      note: ''
    });
  }

  ngOnInit(): void {
    this.findAll();
  }

  conceptDropdownChanged(conceptUuid: string): any {
    this.selectedConceptUuid = conceptUuid;
  }

  onSubmit(expenseData): void {
    expenseData.conceptId = this.selectedConceptUuid;
    this.expenseService.post(expenseData)
      .subscribe(
        () => this.findAll(),
        error => console.log(error)
      );
  }

  findAll(): any {
    this.expenseService.getExpenses().subscribe(response => {
      this.expenses = response.data;
      this.totalExpensesAmount = response.data.reduce((acc, expense) => acc + expense.amount, 0);
    });
  }

  deleteData(id): void {
    this.expenseService.deleteExpense(id)
      .subscribe(
        () => this.findAll(),
        error => console.log(error)
      );
  }
}
