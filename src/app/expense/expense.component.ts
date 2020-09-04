import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.sass']
})
export class ExpenseComponent implements OnInit {
  public expenseForm;
  private selectedConceptUuid: string;
  constructor(private formBuilder: FormBuilder) {
    this.expenseForm = this.formBuilder.group({
      conceptUuid: '',
      amount: 0,
      note: ''
    });
  }

  ngOnInit(): void {
  }

  conceptDropdownChanged(conceptUuid: string): any {
    this.selectedConceptUuid = conceptUuid;
  }

  onSubmit(expenseData) {
    expenseData.conceptUuid = this.selectedConceptUuid;
    console.log(expenseData);
  }
}
