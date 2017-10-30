import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechesListComponent } from './speeches-list.component';

describe('SpeechesListComponent', () => {
  let component: SpeechesListComponent;
  let fixture: ComponentFixture<SpeechesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
