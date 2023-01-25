import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  apiUrl = "http://127.0.0.1/v1/"

  constructor(private http: HttpClient) {
  }

  dataGet(endpoint:string): Observable<any> {
    return this.http.get(this.apiUrl+endpoint)
  }
}
