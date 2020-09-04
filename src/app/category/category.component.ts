import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../interfaces/icategory';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  public categories: Observable<ICategory[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): any {
    this.categoryService.getCategories().subscribe(response => this.categories = response.data);
  }

}
