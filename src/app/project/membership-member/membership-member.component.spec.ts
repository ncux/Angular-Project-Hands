import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipMemberComponent } from './membership-member.component';

describe('MembershipMemberComponent', () => {
  let component: MembershipMemberComponent;
  let fixture: ComponentFixture<MembershipMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
