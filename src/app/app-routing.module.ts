import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import {ExpenseComponent} from './expense/expense.component';
import {ConceptComponent} from './concept/concept.component';
import {CategoryAddComponent} from './category/category-add.component';

const routes: Routes = [
  {
    path: 'category',
    children: [
      { path: '', component: CategoryComponent },
      { path: 'add', component: CategoryAddComponent }
    ]
  },
  { path: 'expense', component: ExpenseComponent },
  { path: 'concept', component: ConceptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
