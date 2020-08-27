import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
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
    // tslint:disable-next-line: max-line-length
    this.addFfl(this.shortLicence);
  }

  public addFfl(shortLicense) {
    // call delete web service
    let params = new URLSearchParams();
    params.set("shortLicense", shortLicense);
    this.http.post('/ffls', {search: params}).subscribe(
      data => {
        var arrFfls = data as string[];
      },
      (er: HttpErrorResponse) => {
        console.log("MESSAGE: " + er);
      }
    );
  }

  public clearForm() {
    this.shortLicence = '';
  }

  ngOnInit() {
  }

}
