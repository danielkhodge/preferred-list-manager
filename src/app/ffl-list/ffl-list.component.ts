import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

declare function errorMessage(msg):any;
declare function successMessage(msg):any;
declare function infoMessage(msg):any;
declare function warningMessage(msg):any;
declare function alertMessage(msg):any;
declare function infoProgressMessage(msg, _timeout):any;

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
		  errorMessage('Delete failed: ' + shortLicense);
        },
        (er: HttpErrorResponse) => {
		  console.log(this.retrieveOperation);
          if (this.retrieveOperation == Operation.ALL) {
              console.log('find-all');
              this.findAll();
          } else {
            console.log('find-by-zip');
            this.search();
          }
		  successMessage(shortLicense + ' deleted!');
        }
      );
    }
  }

   public findAll() {
	 infoProgressMessage("Data loading full list...", 2000);
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
	infoProgressMessage("Data loading...", 1000);
     this.http.get('/ffls', {params: params}).subscribe(
       data => {
		  this.arrFfls = data as string[];		 
       },
       (er: HttpErrorResponse) => {
         console.log('MESSAGE: ' + er);
		 errorMessage("Please provide a valid ZIP Code.");
       }
     );
     this.retrieveOperation = Operation.BY_ZIP;
   }

  ngOnInit() {
  }

}
