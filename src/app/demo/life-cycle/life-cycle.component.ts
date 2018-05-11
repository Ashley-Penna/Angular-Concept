import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/model/person';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit {

  person: Person;

  constructor() { }

  ngOnInit() {
    this.person = new Person("Bob", 20);
  }

  changePerson(){
    // this.person = new Person('Alice', 25); // ref change - ngOnChanges & ngDoCheck
    this.person.name = 'Alex';  // object property change - ngDoCheck
  }
}
