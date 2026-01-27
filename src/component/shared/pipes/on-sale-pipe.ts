import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale',
  standalone: true
})
export class OnSalePipe implements PipeTransform {

  transform(value: string | null | undefined, count: number): string {
    if (!value) return '';
    return value.split(' ', count).join(' ');
  }

}
