import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import { ConceptService } from '../../services/concept.service';
import { IConcept } from '../../interfaces/iconcept';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-concepts-dropdown',
  templateUrl: './concepts-dropdown.component.html',
  styleUrls: ['./concepts-dropdown.component.sass']
})
export class ConceptsDropdownComponent implements OnInit {
  public concepts: Observable<IConcept[]>;
  @Output() selectedConceptUuid = new EventEmitter<string>();

  constructor(private conceptService: ConceptService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): any {
    this.conceptService.getConcepts().subscribe(response => this.concepts = response.data);
  }

  conceptOnChange(conceptId: string): any {
    this.selectedConceptUuid.emit(conceptId);
  }
}
