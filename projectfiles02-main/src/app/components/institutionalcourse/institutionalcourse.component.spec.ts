import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalcourseComponent } from './institutionalcourse.component';

describe('InstitutionalcourseComponent', () => {
  let component: InstitutionalcourseComponent;
  let fixture: ComponentFixture<InstitutionalcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionalcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionalcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
