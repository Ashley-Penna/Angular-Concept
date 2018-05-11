import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BitcoinService {

  constructor(
    private http: HttpClient
  ) { }

  getCurrentPrice(): Observable<any> {
    // toPromise(): convert observable to promise
    return this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }
}

