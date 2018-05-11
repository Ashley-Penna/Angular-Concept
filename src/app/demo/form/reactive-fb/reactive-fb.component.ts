import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-fb',
  templateUrl: './reactive-fb.component.html',
  styleUrls: ['./reactive-fb.component.scss']
})
export class ReactiveFbComponent implements OnInit {

  myFBFormGroup: FormGroup;
  nameControl: FormControl;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.nameControl = new FormControl('', [Validators.maxLength(20)]);
    this.myFBFormGroup = this.fb.group({
      name: this.nameControl,
      age: [0, [this.ageValidator]],
      fullName: this.fb.group({
        firstName: '',
        lastName: ''
      }, {validator: this.fullNameValidator})
    });
  }

  onSubmit() {
    console.log(this.myFBFormGroup.value);
    // this.nameControl.touched
    // this.myFBFormGroup.get('age').pristine

  }

  ageValidator(fc: FormControl): null | {} {
    const age = fc.value;
    return age >= 0 && age < 200 ? null : { age: { actualAge: age, requiredAge: '0 - 200'} };
  }

  fullNameValidator({value}: FormGroup): null | {} {
    // const value = fg.value;
    const { firstName, lastName } = value;
    return firstName.length > 3 && lastName.length > 1 ? null : { fullName: 'not valid!'};
  }
}
