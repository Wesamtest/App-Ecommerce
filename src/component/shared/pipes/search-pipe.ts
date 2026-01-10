import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(arr:any[] ,word:string): any[]{
    return arr.filter((p)=>p.title.toLowerCase().includes(word.toLowerCase()));
  }

}
