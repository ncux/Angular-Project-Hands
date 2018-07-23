import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipSponsorComponent } from './membership-sponsor.component';

describe('MembershipSponsorComponent', () => {
  let component: MembershipSponsorComponent;
  let fixture: ComponentFixture<MembershipSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
