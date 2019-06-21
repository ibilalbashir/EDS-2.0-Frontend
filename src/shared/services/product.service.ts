import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Object> {
    return this.http.get(`${this.url}/Products`)
  }


}
