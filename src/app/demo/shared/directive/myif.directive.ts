import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyif]'
})
export class MyifDirective {

  constructor(
    private tr: TemplateRef<any>,
    private vcf: ViewContainerRef
  ) { }

  @Input() set appMyif(person) {
    if (person){
      // vcf: parent of bound element
      // tr: bound element
      this.vcf.createEmbeddedView(this.tr); // append div to DOM tree
    } else {
      this.vcf.clear(); // remove div from DOM tree
    }
  }

}
