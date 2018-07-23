import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSchoolComponent } from './x-school.component';

describe('XSchoolComponent', () => {
  let component: XSchoolComponent;
  let fixture: ComponentFixture<XSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
