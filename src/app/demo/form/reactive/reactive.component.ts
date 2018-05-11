import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  myFormGroup: FormGroup;

  constructor() {
    this.myFormGroup = new FormGroup({
      name: new FormControl(),
      age: new FormControl()
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    // convert JSON -> string
    alert(JSON.stringify(this.myFormGroup.value));
  }

}
