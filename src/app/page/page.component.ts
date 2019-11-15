import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { CockpitService } from '../cockpit.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  content = "";

  constructor(
    public activatedRoute: ActivatedRoute,
    private cockpitService: CockpitService
  ) {}
  
  ngOnInit() {
    var id = this.activatedRoute.snapshot.paramMap.get("id");
    this.cockpitService
      .getPageById(id)
      .then(payload => {
        this.content = payload.content;
      })
  }

}
