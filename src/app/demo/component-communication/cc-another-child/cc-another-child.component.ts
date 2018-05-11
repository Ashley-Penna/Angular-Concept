import {Component, Input, OnInit} from '@angular/core';
import { Person } from '../../shared/model/person';

@Component({
  selector: 'app-cc-another-child',
  templateUrl: './cc-another-child.component.html',
  styleUrls: ['./cc-another-child.component.scss']
})
export class CcAnotherChildComponent implements OnInit {

  @Input()
  person: Person;

  constructor() { }

  ngOnInit() {
  }

}
