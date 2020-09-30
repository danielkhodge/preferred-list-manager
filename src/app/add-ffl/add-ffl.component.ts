import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

declare function errorMessage(msg):any;
declare function successMessage(msg):any;
declare function infoMessage(msg):any;
declare function warningMessage(msg):any;
declare function alertMessage(msg):any;

@Component({
  selector: 'app-add-ffl',
  templateUrl: './add-ffl.component.html',
  styleUrls: ['./add-ffl.component.css']
})
export class AddFflComponent implements OnInit {

  shortLicence;

  constructor(private http: HttpClient) { }


  public submitFfl() {
    this.addFfl(this.shortLicence);
  }

  public addFfl(shortLicense) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    this.http.post('/ffls/' + shortLicense + '/add', httpOptions).subscribe(
        data => {
          var arrFfls = data as string[];
        },
        (er: HttpErrorResponse) => {
          console.log('MESSAGE: ' + er);
          successMessage(shortLicense + ' added!');
        }
      );
  }

  public clearForm() {
    this.shortLicence = '';
  }

  ngOnInit() {
  }

}
