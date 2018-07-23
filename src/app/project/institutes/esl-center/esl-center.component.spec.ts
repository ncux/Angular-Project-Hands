import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EslCenterComponent } from './esl-center.component';

describe('EslCenterComponent', () => {
  let component: EslCenterComponent;
  let fixture: ComponentFixture<EslCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EslCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
