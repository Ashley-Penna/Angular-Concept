import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../shared/service/bitcoin.service';

@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.scss']
})
export class HttpObservableComponent implements OnInit {

  price: number;

  constructor(
    private bs: BitcoinService
  ) { }

  ngOnInit() {
    this.bs.getCurrentPrice()
      .subscribe(res => {
        console.log(res);
        this.price = res.bpi['USD'].rate_float;
      });
  }

}
