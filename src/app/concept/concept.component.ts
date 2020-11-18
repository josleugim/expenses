import { Component, OnInit } from '@angular/core';
import { IConcept } from '../interfaces/iconcept';
import {Observable} from 'rxjs';
import {ConceptService} from '../services/concept.service';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.sass']
})
export class ConceptComponent implements OnInit {
  concepts: Observable<IConcept[]>;

  constructor(private conceptService: ConceptService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): any {
    this.conceptService.getConcepts().subscribe(response => {
      this.concepts = response.data;
    });
  }

  deleteConcept(uuid): void {
    const concept = {
      uuid: uuid,
      isActive: false
    };

    this.conceptService.updateByUuid(concept).subscribe(response => {
      console.log(response);
      this.findAll();
    });
  }
}
