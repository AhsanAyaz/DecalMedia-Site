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
  private beers : Beer[] = [];
  title = 'decalmedia-site';
  landing = true;
  tap = false;

   getScreen(tapCode) {
     this.dataService.get_screen(tapCode).subscribe((res : Beer[])=>{
       this.landing = false;
       this.tap = true;
        this.beers = res;
        console.log(res);
     });
   }

  private beersObservable : Observable<Beer[]> ;

  constructor(private dataService: DataService) {

    // this.dataService.get_screen(this.tapCode).subscribe((res : Beer[])=>{
    //   this.beers = res;
    //    console.log(res);
    // });
    }
}