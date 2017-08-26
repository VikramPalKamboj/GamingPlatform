import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {FlashMessagesService} from "angular2-flash-messages"
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  state: string = '';
  error: any;
  public name:any;


  constructor(
      public af:AngularFire,
  public flashMessage:FlashMessagesService,
      private router: Router

  ){
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
  }

  ngOnInit() {
  }
// it will create login and logout pop up for google
  login(){
    this.af.auth.login();
  }
  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/listings']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        });
    this.flashMessage.show('You are logged out',
        {cssClass:'alert-success', timeout: 3000});
}



  logout(){
    this.af.auth.logout().then(
        (success) => {
          console.log(success);
          this.router.navigate(['/listings']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        });
    this.flashMessage.show('You are logged out',
        {cssClass:'alert-success', timeout: 3000});

  }


}
