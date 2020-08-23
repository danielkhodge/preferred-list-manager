import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ffl-list',
  templateUrl: './ffl-list.component.html',
  styleUrls: ['./ffl-list.component.css']
})
export class FflListComponent implements OnInit {

  zip: number = 84401;
  radius: number = 100;

  public searchZip() {
    this.resultsList(this.zip, this.radius);
  }

  public resultsList(zip, radius) {
    
  }
  
  constructor() { }

  ngOnInit() {
  }

}
