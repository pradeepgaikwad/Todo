import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardcodedauthenticationService : HardcodedauthenticationService) { }
 //isUserLoggedIn: boolean=true;
  ngOnInit(

  ) {
   // this.isUserLoggedIn=this.hardcodedauthenticationService.isUserLoggedIn()
  }

}
