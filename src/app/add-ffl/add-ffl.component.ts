import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-ffl',
  templateUrl: './add-ffl.component.html',
  styleUrls: ['./add-ffl.component.css']
})
export class AddFflComponent implements OnInit {

  shortLicence;
  url = 'https://sandbox-app.fflapi.com/v1/addDealerToCustomList';

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
        }
      );
  }

  public clearForm() {
    this.shortLicence = '';
  }

//   // upload() {
//   //   let inputEl: HTMLInputElement = this.inputEl.nativeElement;
//   //   let fileCount: number = inputEl.files.length;
//   //   let formData = new FormData();
//   //   if (fileCount > 0) { // a file was selected
//   //       for (let i = 0; i < fileCount; i++) {
//   //           formData.append('file[]', inputEl.files.item(i));
//   //       }
//   //       this.http
//   //           .post('http://your.upload.url', formData)
//   //           // do whatever you do...
//   //           // subscribe to observable to listen for response
//     }
// }

  ngOnInit() {
  }

}
