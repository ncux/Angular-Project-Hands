import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmanComponent } from './oman.component';

describe('OmanComponent', () => {
  let component: OmanComponent;
  let fixture: ComponentFixture<OmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
