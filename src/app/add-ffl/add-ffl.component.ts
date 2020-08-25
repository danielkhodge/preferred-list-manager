import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ffl',
  templateUrl: './add-ffl.component.html',
  styleUrls: ['./add-ffl.component.css']
})
export class AddFflComponent implements OnInit {

  shortLicence;

  public submitFfl() {
    // tslint:disable-next-line: max-line-length
    this.addFfl(this.shortLicence);
  }

  public addFfl(shortLicence) {
    console.log({shortLicence});

  }

  public clearForm() {
    
  }

  constructor() { }

  ngOnInit() {
  }

}
