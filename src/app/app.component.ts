import { Component} from '@angular/core';
import { concatMap, map, tap } from 'rxjs/operators';
import { Observable, concat, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

import { Beer } from './beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  polledBeers: Observable<Beer>;
  beers : Beer[] = [];
  title = 'decalmedia-site';
  landing = true;
  tap = false;
  url:string;
  Math: any;

  getScreen(tapCode) {
    const beers$: Observable<any> = this.dataService.get_screen(tapCode)
      .pipe(tap( () => {
        this.landing = false; 
        this.Math = Math
      }
    ));

    const polledBeers$ = timer(0, 1000)
    .pipe(( () => beers$))
    console.log(this.polledBeers);
    console.log(beers$);
  }
  
  constructor(private dataService: DataService) {

    }
}