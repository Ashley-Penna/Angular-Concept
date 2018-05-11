import { Component, OnInit } from '@angular/core';
import {reject} from 'q';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  money = 100;

  moneyList = [5, 23, 54, 41, 55, 99];

  newMoney: number;

  fetchMoney = new Promise((resolve, reject) => {
    setTimeout(() => resolve(200), 2000);
  });

  asyncMoney;

  constructor() { }

  ngOnInit() {
    this.fetchMoney.then((res) => {
      this.asyncMoney = res;
    });
  }

  addMoney() {
    this.moneyList.push(this.newMoney); // impure change
    // this.moneyList = this.moneyList.concat(this.newMoney); // pure change, concat returns an array with new reference
    // this.moneyList = [...this.moneyList, this.newMoney]; // ... => spread operator
  }


}
