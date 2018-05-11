import { Component, OnInit } from '@angular/core';
import { Person } from '../../shared/model/person';

@Component({
  selector: 'app-cc-parent',
  templateUrl: './cc-parent.component.html',
  styleUrls: ['./cc-parent.component.scss']
})
export class CcParentComponent implements OnInit {

  person: Person;

  constructor() { }

  ngOnInit() {
    this.person = new Person('Bob',28);
  }

  handleAddAge(newAge){
    this.person.age = newAge;
  }
}
