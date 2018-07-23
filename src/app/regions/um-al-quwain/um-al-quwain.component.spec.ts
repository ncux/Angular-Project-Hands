import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmAlQuwainComponent } from './um-al-quwain.component';

describe('UmAlQuwainComponent', () => {
  let component: UmAlQuwainComponent;
  let fixture: ComponentFixture<UmAlQuwainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmAlQuwainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmAlQuwainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
