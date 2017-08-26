import { Component, OnInit,Inject } from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import { AngularFire, FirebaseApp } from 'angularfire2';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;
  messages:any;
  public name: any;
  public auth: any;
  public auths:any;

  constructor(public af: AngularFire,
              public flashMessage: FlashMessagesService,
              public router: Router,
              @Inject(FirebaseApp) firebaseApp: any) {
        this.auths = firebaseApp.auth()
    console.log(this.auths);

    


  }

  
  onSubmits(formData) {
     if(formData.valid) {
       console.log('Sending email verification');
       this.auths.sendPasswordResetEmail(formData.value.email)
         .then( (response) => {
           console.log('Sent successfully');
           this.messages="Plase login to your mail and verify your Email"
         })
         .catch( (error) => {
           console.log(error);
         })
     }
  }
  
  
 
  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
    this.af.auth.subscribe(auth => console.log(auth));
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
          (success) => {
            console.log(success);
            this.router.navigate(['/home'])
          }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          })
    }


  }
}