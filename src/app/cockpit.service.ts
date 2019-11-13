import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CockpitService {

  private cockpitApiUrl = 'http://localhost:8080';
  private cockpitToken = environment.cockpitToken;


  constructor(
    private http: HttpClient
  ) { }

  getAbout() {
    return this.http
      .get(this.cockpitApiUrl + '/api/singletons/get/About', {
        headers: {
          'Cockpit-Token': this.cockpitToken
        }
      })
      .toPromise()
      .then((payload:any) => {
        return payload.content;
      })
  }

  getHeader() {
    return this.http
      .get(this.cockpitApiUrl + '/api/singletons/get/header', {
        headers: {
          'Cockpit-Token': this.cockpitToken
        }
      })
      .toPromise()
      .then((payload:any) => {
        return payload.content;
      })
  }

  getFooter() {
    return this.http
      .get(this.cockpitApiUrl + '/api/singletons/get/footer', {
        headers: {
          'Cockpit-Token': this.cockpitToken
        }
      })
      .toPromise()
      .then((payload:any) => {
        return payload.content;
      })
  }

  getPageTitles() {
    return this.http
      .post(this.cockpitApiUrl + '/api/collections/get/Pages', {
        fields: {
          Title: true
        }
      }, {
        headers: {
          'Cockpit-Token': this.cockpitToken
        }
      })
      .toPromise()
      .then((payload:any) => {
        return payload.entries;
      });
  }

  getPageById(id) {
    return this.http
      .post(this.cockpitApiUrl + '/api/collections/get/Pages', {
        filter: {
          _id: id
        }
      }, {
        headers: {
          'Cockpit-Token': this.cockpitToken
        }
      })
      .toPromise()
      .then((payload:any) => {
        return payload.entries[0];
      });
  }

}
