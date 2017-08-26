import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {FlashMessagesService} from 'angular2-flash-messages'
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  state: string = '';
  error: any;
  public name:any;


    constructor(public af: AngularFire,private router: Router) {
        this.af.auth.subscribe(auth => {
            if(auth) {
                this.router.navigateByUrl('/listings');
            }
        });
    }
    login(){
        this.af.auth.login().then(
            (success) => {
                console.log(success);
                this.router.navigate(['/listings']);
            }).catch(
            (err) => {
                console.log(err);
                this.error = err;
            });
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


    }
    
    loginGH() {
        this.af.auth.login({
            provider: AuthProviders.Github,
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


    }
    
    

    onSubmit(formData) {
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.login({
                    email: formData.value.email,
                    password: formData.value.password
                },
                {
                    provider: AuthProviders.Password,
                    method: AuthMethods.Password,
                }).then(
                (success) => {
                    console.log(success);
                    this.router.navigate(['/listings']);
                }).catch(
                (err) => {
                    console.log(err);
                    this.error = err;
                })
        }


    }


}
