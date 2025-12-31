import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Categoriy {

  private readonly httpClient=inject(HttpClient)

  getAllCategory():Observable<any>{
    return this.httpClient.get(environment.baseUrl+'categories')
  }

  getAllSpecificCategory():Observable<any>{
    return this.httpClient.get(environment.baseUrl+'categories/6439d5b90049ad0b52b90048')
  }
  
}
