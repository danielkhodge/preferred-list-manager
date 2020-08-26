import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-ffl-list',
  templateUrl: './ffl-list.component.html',
  styleUrls: ['./ffl-list.component.css']
})
export class FflListComponent implements OnInit {

  name = 'Ffl';
  zip;
  radius = "5";

  constructor(private http: HttpClient) {}
  arrFfls: string [];

  getFfls() {
    console.log('This method is working');
    var data = this.http.get('../../assets/data/ffl-list-test.json');
    console.log(data);
    return data;
  }

  public removeFfl(shortLicense: string) {
    if (confirm('Are you sure to delete ' + shortLicense)) {
      // call delete web service
      this.http.delete('/ffls/' + shortLicense).subscribe(
        data => {
          this.arrFfls = data as string[];
        },
        (er: HttpErrorResponse) => {
          console.log("MESSAGE: " + er);
        }
      );

      // call load web service using current zip and radius
      //this.search_MOCK();
      this.search();
    }
  }

  public search() {
    console.log(this.zip, this.radius);

    // this.http.post('https://sandbox-app.fflapi.com/v1/getCustomDealerList', formData, httpOptions).subscribe(
    this.http.get('/ffls/' + this.zip).subscribe(
      data => {
        this.arrFfls = data as string[];
      },
      (er: HttpErrorResponse) => {
        console.log("MESSAGE: " + er);
      }
    );
  }
  
  // public search_MOCK() {
  //   this.http.get('./../../assets/data/ffl-list-test.json').subscribe(
  //     data => {
  //       this.arrFfls = data as string [];
  //     },
  //     (er: HttpErrorResponse) => {
  //       console.log(this.arrFfls[1]);
  //     }
  //   );
  // }

  ngOnInit() {
    //this.search_MOCK();
  }

}
