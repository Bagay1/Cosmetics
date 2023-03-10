import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServerService {


  constructor(private http: HttpClient) {
  }

  dataGet(endpoint:string): Observable<any> {
    return this.http.get(environment.apiUrl+endpoint)
  }
}
