import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.sass']
})
export class CategoryAddComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(categoryData): void {
    this.categoryService.post(categoryData)
      .subscribe(
        () => this.categoryForm.reset(),
        err => console.log(err)
      );
  }
}
