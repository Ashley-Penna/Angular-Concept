import { Directive, OnChanges, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyhidden]'
})
export class MyhiddenDirective implements OnChanges {

  @Input()
  person; // person is passed from parent component(host element)

  constructor(
    private er: ElementRef
  ) { }

  ngOnChanges() { // will be invoked when person got changed
    if (this.person) { // show
      // get a DOM object which represents the element applied with current directive
      this.er.nativeElement.style.display = '';
    } else { // hide
      this.er.nativeElement.style.display = 'none';
    }
  }
}
