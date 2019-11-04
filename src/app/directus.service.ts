import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectusService {

  private directusApiUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  getAbout() {
    return this.http
      .get(this.directusApiUrl + '/_/items/about')
      .toPromise()
      .then((payload:any) => {
        return payload.data[0].about;
      });
  }

  getPages() {
    return this.http
      .get(this.directusApiUrl + '/_/items/pages')
      .toPromise()
      .then((payload:any) => {
        return payload.data;
      });
  }

}
