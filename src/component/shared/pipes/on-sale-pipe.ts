import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale',
})
export class OnSalePipe implements PipeTransform {

  transform(value:string,count:number): string {
    // عازه اخد بعدد count اظهر data
    return value.split(' ',count).join(' ');
  }

}
