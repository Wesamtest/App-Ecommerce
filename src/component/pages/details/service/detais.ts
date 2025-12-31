import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Detais {

  private readonly httpClient=inject(HttpClient)


  getProductDetails(id:String|null):Observable<any>{
    return this.httpClient.get( environment.baseUrl + `products/${id}`)
  }
  
}
