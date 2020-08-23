import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FflListComponent } from './ffl-list.component';

describe('FflListComponent', () => {
  let component: FflListComponent;
  let fixture: ComponentFixture<FflListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FflListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FflListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
