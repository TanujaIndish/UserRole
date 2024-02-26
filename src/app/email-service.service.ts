import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient) { }

  private apiURL = 'http://localhost:3000/send-email';

  // sendData(name:string, email:string, message:string){
  //   const data = {
  //     name : name,
  //     email:email,
  //     message:message
  //   };
  //   return this.http.post(this.apiURL, data);

  // }

  sendEmail(emailData: any): Observable<any> {
    return this.http.post(this.apiURL, emailData);
  }
}
