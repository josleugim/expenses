import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import {ExpenseComponent} from './expense/expense.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'expense', component: ExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
