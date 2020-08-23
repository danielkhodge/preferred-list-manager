import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ffl',
  templateUrl: './add-ffl.component.html',
  styleUrls: ['./add-ffl.component.css']
})
export class AddFflComponent implements OnInit {

  licenceNumber;
  licenceName;
  businessName;
  premiseStreet;
  premiseCity;
  premiseState;
  premiseZip;

  public submitFfl() {
    // tslint:disable-next-line: max-line-length
    this.addFfl(this.licenceNumber, this.licenceName, this.businessName, this.premiseStreet, this.premiseCity, this.premiseState, this.premiseZip)
  }

  public addFfl(licenceNumber, licenceName, businessName, premiseStreet, premiseCity, premiseState, premiseZip) {
    console.log({licenceNumber, licenceName, businessName, premiseStreet, premiseCity, premiseState, premiseZip});
  }

  constructor() { }

  ngOnInit() {
  }

}
