import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pageTitle: 'FFL Manager';

  constructor(protected alertService: AlertService) { }

  ngOnInit() {
  }

}
