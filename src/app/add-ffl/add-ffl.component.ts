import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient, HttpRequest } from '@angular/common/http';

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

  public addFfl(shortLicence) {
    console.log({shortLicence});
    console.log(this.http);

    const endPoints = '/posts';
    this.http.post(this.url + endPoints, shortLicence).subscribe(data => {
    console.log(data);
  });
  }

  public clearForm() {
    this.shortLicence = '';
  }

  ngOnInit() {
  }

}
