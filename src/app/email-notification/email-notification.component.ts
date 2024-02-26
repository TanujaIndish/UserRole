import { Component } from '@angular/core';
import { EmailServiceService } from '../email-service.service';
import { response } from 'express';

@Component({
  selector: 'app-email-notification',
  templateUrl: './email-notification.component.html',
  styleUrls: ['./email-notification.component.css']
})
export class EmailNotificationComponent {
// name:string = '';
// email: any;
// message: any;

to: string = '';
  subject: string = '';
  body: string = '';

constructor( private EmailServiceService:EmailServiceService){}

// sendEmail(){
//   this.EmailServiceService.sendData(this.name, this.email, this.message).subscribe(
//     response =>{
//       console.log('EMail sent successfully');
//     },
//     error =>{
//       console.log('Error sending email')
//     }
//   )

// }

sendEmail() {
  const emailData = {
    to: this.to,
    subject: this.subject,
    body: this.body
  };

  this.EmailServiceService.sendEmail(emailData).subscribe(
    response => {
      console.log('Email sent successfully', response);
      // Handle success (e.g., show a success message)
    },
    error => {
      console.error('Error sending email', error);
      // Handle error (e.g., show an error message)
    }
  );
}
}
