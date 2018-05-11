import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFilter',
  pure: false // create an impure pipe
})
export class MoneyFilterPipe implements PipeTransform {

  transform(value: number[], args?: any): any {
    return value.filter(m => m > 50);
  }

}
