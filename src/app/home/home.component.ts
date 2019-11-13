import { Component, OnInit } from '@angular/core';
import { CockpitService } from '../cockpit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  about = "";
  pages = [];

  constructor(
    private cockpitService: CockpitService
  ) { }

  ngOnInit() {
    this.cockpitService
      .getAbout()
      .then((about) => {
        this.about = about;
      });
    this.cockpitService
      .getPageTitles()
      .then((pages) => {
        this.pages = pages;
      });
  }
}
