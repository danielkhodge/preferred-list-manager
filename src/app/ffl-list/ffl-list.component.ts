import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

enum Operation {
  ALL,
  BY_ZIP
}

@Component({
  selector: 'app-ffl-list',
  templateUrl: './ffl-list.component.html',
  styleUrls: ['./ffl-list.component.css']
})

export class FflListComponent implements OnInit {
  name = 'Ffl';
  zip = '';
  radius = '5';
  retrieveOperation = Operation.ALL;
  arrFfls: string [];

  constructor(private http: HttpClient) {}
  
  public removeFfl(shortLicense: string) {
    if (confirm('Are you sure to delete ' + shortLicense)) {
      // call delete web service
      this.http.delete('/ffls/' + shortLicense + "/remove").subscribe(
        data => {
          this.arrFfls = data as string[];
          console.log("Data...I guess.");
        },
        (er: HttpErrorResponse) => {
          console.log('MESSAGE: ' + er);
		  console.log(this.retrieveOperation);
          if (this.retrieveOperation == Operation.ALL) {
              console.log('find-all');
              this.findAll();
          } else {
            console.log('find-by-zip');
            this.search();
          }
        }
      );
    }
  }

   public findAll() {
     this.http.get('/ffls').subscribe(
       data => {
         this.arrFfls = data as string[];
       },
       (er: HttpErrorResponse) => {
         console.log('MESSAGE: ' + er);
       }
     );
     this.retrieveOperation = Operation.ALL;
   }

   public search() {
     console.log(this.zip, this.radius);
	let params = new HttpParams();
    params = params.append('zipCode', this.zip);
    params = params.append('radius', this.radius);
     this.http.get('/ffls', {params: params}).subscribe(
       data => {
         this.arrFfls = data as string[];
       },
       (er: HttpErrorResponse) => {
         console.log('MESSAGE: ' + er);
       }
     );
     this.retrieveOperation = Operation.BY_ZIP;
   }

//  public search() {
//    console.log(this.zip, this.radius);
//    this.http.get('../../assets/data/ffl-list-test.json').subscribe(
//      data => {
//        this.arrFfls = data as string[];
//      },
//      (er: HttpErrorResponse) => {
//        console.log('MESSAGE: ' + er);
//      }
//    );
//  }

  ngOnInit() {
  }

}
