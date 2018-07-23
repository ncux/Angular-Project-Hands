import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asl',
  templateUrl: './asl.component.html',
  styleUrls: ['./asl.component.css']
})
export class AslComponent implements OnInit {

  emirateOrCountry: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEmirateOrCountry(event: any) {

    this.emirateOrCountry = event.target.value;

    switch (this.emirateOrCountry) {
      case  'Dubai': this.router.navigate(['/dubai']);
        break;

      case 'Sharjah': this.router.navigate(['/sharjah']);
        break;

      case 'Abu Dhabi': this.router.navigate(['/abu-dhabi']);
        break;

      case 'Ajman': this.router.navigate(['/ajman']);
        break;

      case 'Ras al Khaimah': this.router.navigate(['/ras-al-khaimah']);
        break;

      case 'Fujairah': this.router.navigate(['/fujairah']);
        break;

      case 'Um Al Quwain': this.router.navigate(['/um-al-quwain']);
        break;

      case 'Bahrain': this.router.navigate(['/bahrain']);
        break;

      case 'Oman': this.router.navigate(['/oman']);
        break;

      case 'Qatar': this.router.navigate(['/qatar']);
        break;

      case 'Kuwait': this.router.navigate(['/kuwait']);
        break;

      case 'Saudi Arabia': this.router.navigate(['/saudi-arabia']);
        break;

    }
  }

}
