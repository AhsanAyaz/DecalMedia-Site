import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import { Beer } from './beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  beers : Beer[] = [];
  title = 'decalmedia-site';
  landing = true;
  tap = false;
  url:string;
  Math: any;

   getScreen(tapCode) {
     this.dataService.get_screen(tapCode).subscribe((res : Beer[])=>{
       this.landing = false;
       this.beers = res;
       this.Math = Math;
     });
   }

  private beersObservable : Observable<Beer[]> ;

  constructor(private dataService: DataService) {

    }
}