import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private AuthService: AuthService){}
user: any={
  id:'',
  firstname:'',
  lastname:'',
  email:'',
  password:''
}

registerForm():void{
  this.AuthService.register(this.user).subscribe(
    (response)=>{
      localStorage.setItem('token', response.token)
    },
    error => {
      console.error(error);
    }
  )
}

}
