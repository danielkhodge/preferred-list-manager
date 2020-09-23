import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pageTitle: 'FFL Manager';
  hideMessage = false;

  constructor(protected alertService: AlertService) { }

  FadeOut() {
    this.setTimeOut();
    console.log('This button works');
  }

  setTimeOut() {
    setTimeout( () => {
      this.hideMessage = true;
    }, 3000);
  }

  ngOnInit() {
  }

}
