import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    "username": "",
    "password": ""
  };

  constructor(private router: Router){

  }

  onLogin(){
    this.router.navigate(['/home'])
  }
}
