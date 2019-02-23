import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import { Http } from '@angular/http';

@Injectable()
export class MediczmentserviceProvider {
  result:any;
  URL = 'http://localhost:5000/api/v1/docs';
  constructor(public http: Http) {}
  
  getAll(): Observable<any> {
    return this.http.get(this.URL)
    .map((res)=> res.json())
  } 
  get(id: string): Observable<any> {
    return this.http.get(this.URL + '/' + id);
  }
}
