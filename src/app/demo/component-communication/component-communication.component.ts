import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})
export class ComponentCommunicationComponent implements OnInit {

  @Input()
  person;

  constructor() { }

  ngOnInit() {
  }

}