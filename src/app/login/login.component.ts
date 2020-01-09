import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username='Pradeep'
password=''
errorMessage='Invalid Credentails'
invalidLogin=false
  constructor(private router: Router,
    private hardcodedauthenticationService : HardcodedauthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
    // console.log(this.username);
    if(this.hardcodedauthenticationService.authentication(this.username,this.password))
    {
      //Naviagate to welcome page
      this.router.navigate(['welcome'])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true
    }
  }
}
