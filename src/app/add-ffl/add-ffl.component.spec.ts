import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFflComponent } from './add-ffl.component';

describe('AddFflComponent', () => {
  let component: AddFflComponent;
  let fixture: ComponentFixture<AddFflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
