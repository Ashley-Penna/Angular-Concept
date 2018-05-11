import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-form-observable',
  templateUrl: './form-observable.component.html',
  styleUrls: ['./form-observable.component.scss']
})
export class FormObservableComponent implements OnInit {

  counterFC: FormControl;
  counter: number;
  counterSub: Subscription;

  constructor() { }

  ngOnInit() {
    this.counterFC = new FormControl();
    // 1, 12, 123
    // observable is an object which will continuously send data to all its subscribers(observers) over time
    // stream of data
    this.counterSub = this.counterFC.valueChanges  // observable
      .pipe(
        map(value => value *2)
      )
      .subscribe(value => {
        this.counter = value;
      });
  }

  cancel(){
    this.counterSub.unsubscribe();
  }

}
