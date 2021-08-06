import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailcourseComponent } from './retailcourse.component';

describe('RetailcourseComponent', () => {
  let component: RetailcourseComponent;
  let fixture: ComponentFixture<RetailcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
