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

  public removeFfl(name: string) {
    if (confirm('Are you sure to delete ' + name)) {
      console.log('Implement delete functionality here');
      // call delete web service
      
      // call load web service using current zip and radius
      //this.search_MOCK();
      this.search();
    }
  }

  public search() {
    console.log(this.zip, this.radius);

    const httpOptions = {
      headers: new HttpHeaders({
        "X-Authorization": "v0uzRDwsEhfYRsx19Nmx9tFaNwQP7UetkC0iVdRVzyMnK7PLvDiUknnMW0DLP4ol5f36b419419b7"
      })
    };

    const formData = new FormData();
    formData.append('zipcode', this.zip);
    formData.append('radius', this.radius);

    
    // this.http.post('https://sandbox-app.fflapi.com/v1/getCustomDealerList', formData, httpOptions).subscribe(
    this.http.post('/api/getCustomDealerList', formData, httpOptions).subscribe(
      data => {
        this.arrFfls = data as string[];
      },
      (er: HttpErrorResponse) => {
        console.log("MESSAGE: " + er);
        // console.log("First Record: " + this.arrFfls[1]);
      }
    );
    // this.getFfls()
    //   .subscribe(
    //     {
    //       next(position) {
    //         console.log('Current Position: ', position);
    //       },
    //       error(msg) {
    //         console.log('Error Getting Location: ', msg);
    //       },
    //       complete() {
    //         console.log('Data Complete!');
    //       }
    //     });
  }
  
  public search_MOCK() {
    this.http.get('./../../assets/data/ffl-list-test.json').subscribe(
      data => {
        this.arrFfls = data as string [];
      },
      (er: HttpErrorResponse) => {
        console.log(this.arrFfls[1]);
      }
    );
  }

  ngOnInit() {
    //this.search_MOCK();
  }

}
