import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from "./services/firebase.service";
import {FlashMessagesModule} from "angular2-flash-messages"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { ListingsComponent } from './listings/listings.component';
import {ListingComponent} from "./listing/listing.component";
import { ProfileComponent } from './profile/profile.component';
import { Profile2Component } from './profile2/profile2.component';
import { SignupComponent } from './signup/signup.component';
import { LfgroupComponent } from './lfgroup/lfgroup.component';




const appRoutes: Routes=[

  {path:'home',component:HomeComponent},
  {path:'listings',component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  {path:'add-listing',component:AddListingComponent},
  {path:'profile',component:ProfileComponent},
  {path:'profile2/:id',component:Profile2Component},
  {path:'profile2',component:Profile2Component},
  {path:'signup',component:SignupComponent},
  {path:'lfgroup',component:LfgroupComponent}

]

export const firebaseConfig = {
  apiKey: 'AIzaSyBCsuvnKDj4invhEhWGcm02cYJ_ND1VIkU',
  authDomain: 'proplisting-4670e.firebaseapp.com',
  databaseURL: 'https://proplisting-4670e.firebaseio.com',
  storageBucket: 'proplisting-4670e.appspot.com',
  messagingSenderId: '517906204482'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    ListingsComponent,
    NavbarComponent,
    AddListingComponent,
    EditListingComponent,
    ListingsComponent,
    ProfileComponent,
    Profile2Component,
    SignupComponent,
    LfgroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
