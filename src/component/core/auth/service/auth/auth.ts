import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Register } from './../../../../pages/register/register';
import { Observable } from 'rxjs';
import { Router } from 'express';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private readonly httpClient=inject(HttpClient)
 

  registerFormData(data:object):Observable<any>{
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data);
  }
   loginFormData(data:object):Observable<any>{
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data);
  }
  
}
