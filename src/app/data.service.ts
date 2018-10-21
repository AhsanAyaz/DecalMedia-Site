import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // apiUrl:string = "https://beercrawl.com.au/api/v1";
  apiUrl = 'https://beercrawl.crawlmedia.com.au/api/v1';
  // apiUrl:string = "http://beercrawl.local/api/v1";
  constructor(private httpClient: HttpClient) {
  }

  get_screen(tapCode) {
    return this.httpClient.get<{items: Beer, status: string}>(this.apiUrl + '/ontap/' + tapCode);
  }
}
