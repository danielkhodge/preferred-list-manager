import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() multiple: boolean = false;
  @ViewChild('fileInput', {static: false}) inputEl: ElementRef;

    constructor(private http: HttpClient) {}

    public upload() {
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file[]', inputEl.files.item(i));
            }
            this.http
                .post('/ffl/upload', formData);
                // do whatever you do...
                // subscribe to observable to listen for response
        }
    }

  ngOnInit() {
  }

}
