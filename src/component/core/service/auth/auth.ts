import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Register } from '../../../pages/register/register';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private readonly httpClient=inject(HttpClient)
  private readonly cookieService=inject(CookieService)
  private readonly router=inject(Router)

  registerFormData(data:object):Observable<any>{
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data);
  }
   loginFormData(data:object):Observable<any>{
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data);
  }

  logOut(){
    this.cookieService.delete('token')
    this.router.navigate(['/login'])
  }


  submitVerifyEmail(data:object):Observable<any>{
    return this.httpClient.post(environment.baseUrl+'auth/forgotPasswords',data)

  }

   submitVerifycode(data:object):Observable<any>{
    return this.httpClient.post(environment.baseUrl+'auth/verifyResetCode',data)

  }

   submitResetPassword(data:object):Observable<any>{
    return this.httpClient.put(environment.baseUrl+'auth/resetPassword',data)

  }
}
