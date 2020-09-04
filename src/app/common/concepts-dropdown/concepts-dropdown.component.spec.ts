import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsDropdownComponent } from './concepts-dropdown.component';

describe('ConceptsDropdownComponent', () => {
  let component: ConceptsDropdownComponent;
  let fixture: ComponentFixture<ConceptsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
