import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient:HttpClient) { }

  private apiURL = 'http://localhost:3000';

  register(user: any):Observable<any>{
    return this.HttpClient.post(`${this.apiURL}/register`, user);
  }
}
