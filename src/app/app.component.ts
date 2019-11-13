import { Component, OnInit } from '@angular/core';
import { CockpitService } from './cockpit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  headerHtml = "";
  footerHtml = "";

  constructor(
    private cockpitService: CockpitService
  ) { }

  ngOnInit(): void {
    this.cockpitService.getHeader()
      .then( headerHtml => this.headerHtml = headerHtml );
    this.cockpitService.getFooter()
      .then( footerHtml => this.footerHtml = footerHtml );
  }

}
