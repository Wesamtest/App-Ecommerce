import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AllProduct {

  private readonly httpClient=inject(HttpClient)

  getAllProducts():Observable<any>{
    return this.httpClient.get( environment.baseUrl+ 'products')
  }
  
  getSpecificProduct():Observable<any>{

    return this.httpClient.get( environment.baseUrl+ 'products/6428de2adc1175abc65ca05b')
  }
}
