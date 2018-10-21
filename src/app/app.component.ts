import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { DataService } from './data.service';

import { Beer } from './beer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  polledBeers: Beer;
  callResp: string;
  title = 'decalmedia-site';
  landing = true;
  tap = false;
  url: string;
  Math: any;

  getSizeStd(size) {
    return Math.round((size.volume * +this.polledBeers.abv * 0.789) * 100) / 100;
  }

  getScreen(tapCode) {
    timer(0, 1000)
      .pipe(mergeMap(() => this.dataService.get_screen(tapCode)))
      .subscribe(beersResp => {
        this.callResp = beersResp.status;
        this.polledBeers = beersResp.items;
        this.landing = false;
      });
  }

  constructor(private dataService: DataService) {
  }
}
