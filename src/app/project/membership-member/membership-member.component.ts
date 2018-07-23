import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-member',
  templateUrl: './membership-member.component.html',
  styleUrls: ['./membership-member.component.css']
})
export class MembershipMemberComponent implements OnInit {

  form: NgForm;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  searchReddit(e) {
    //   e.preventDefault();
    //   const checkboxes = document.querySelectorAll('input[name="memberType"]:checked');
    //   const checkboxValues = Array(...checkboxes).map(e => e.value);
    //   const otherValue = e.target.querySelector('#other').value;
    //
    //
    //
    //   console.log(checkboxValues, otherValue);
    //   this.router.navigate(['/membership/thanks']);


  }
}
