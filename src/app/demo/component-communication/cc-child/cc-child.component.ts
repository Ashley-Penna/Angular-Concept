import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../shared/model/person';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc-child.component.html',
  styleUrls: ['./cc-child.component.scss']
})
export class CcChildComponent implements OnInit {

  @Input()
  person: Person;

  age: number;

  @Output()
  onAddAge = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.age = this.person.age;
  }

  addAge() {
    this.age++;
    this.onAddAge.emit(this.age); // emit an event which carries data to parent component
  }
}
