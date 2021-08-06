import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcsetComponent } from './icset.component';

describe('IcsetComponent', () => {
  let component: IcsetComponent;
  let fixture: ComponentFixture<IcsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
