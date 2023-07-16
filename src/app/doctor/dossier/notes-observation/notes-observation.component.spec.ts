import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesObservationComponent } from './notes-observation.component';

describe('NotesObservationComponent', () => {
  let component: NotesObservationComponent;
  let fixture: ComponentFixture<NotesObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesObservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
