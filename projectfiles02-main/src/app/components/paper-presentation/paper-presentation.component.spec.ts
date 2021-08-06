import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperPresentationComponent } from './paper-presentation.component';

describe('PaperPresentationComponent', () => {
  let component: PaperPresentationComponent;
  let fixture: ComponentFixture<PaperPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
