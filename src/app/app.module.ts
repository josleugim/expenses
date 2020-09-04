import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import {CategoryService} from './services/category.service';
import {HttpClientModule} from '@angular/common/http';
import {ConceptService} from './services/concept.service';
import { ConceptsDropdownComponent } from './common/concepts-dropdown/concepts-dropdown.component';
import { ExpenseComponent } from './expense/expense.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ConceptsDropdownComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, ConceptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
