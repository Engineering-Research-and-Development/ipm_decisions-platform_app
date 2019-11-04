import { Component } from '@angular/core';
import { DirectusService } from './directus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo';
  about = "";
  pages = [];

  constructor(
    private directusService: DirectusService
  ) { }

  ngOnInit() {
    this.directusService
      .getAbout()
      .then((about) => {
        this.about = about;
      });
    this.directusService
      .getPages()
      .then((pages) => {
        this.pages = pages;
      });
  }

}
