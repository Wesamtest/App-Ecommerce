import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CartServices {

  private readonly httpClient = inject(HttpClient)
  private readonly cookieService = inject(CookieService)

  countNumber:BehaviorSubject<number>=new BehaviorSubject(0)

  
myHeaders:object={
        headers: {
          token: this.cookieService.get('token')
        }
      }
  getcartApi(id: string): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'cart',
      {
        productId: id
      },
      

    )

  }

  getLoggedInUserApi(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'cart',)
  }

  removeSpicifcCartItem(id: string): Observable<any> {

    return this.httpClient.delete(environment.baseUrl + `cart/${id}`,)
  }


  updatespicifcCartItem(id:string,count:number):Observable<any>{

    return this.httpClient.put(environment.baseUrl + `cart/${id}`,
      {
          count: count,
      },
        
    )

  }


  Checkoutsession(id:string|null,data:object):Observable<any>{

    return this.httpClient.post(environment.baseUrl+`orders/checkout-session/${id}?url=http://localhost:4200`,data,)
  }

  createCashOrder(id:string|null,data:object):Observable<any>{

    return this.httpClient.post(environment.baseUrl+`orders/${id}`,data,)
  }
}
