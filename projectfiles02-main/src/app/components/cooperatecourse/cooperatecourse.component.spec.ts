import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperatecourseComponent } from './cooperatecourse.component';

describe('CooperatecourseComponent', () => {
  let component: CooperatecourseComponent;
  let fixture: ComponentFixture<CooperatecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperatecourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperatecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
