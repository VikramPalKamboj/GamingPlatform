import { Component, OnInit } from '@angular/core';
import {FirebaseObjectObservable, AngularFire, FirebaseListObservable} from "angularfire2";
import {Subject} from 'rxjs/Subject';
import {ActivatedRoute, Router} from "@angular/router";
import {async} from "rxjs/scheduler/async";
import {FirebaseService} from "../services/firebase.service";
import * as firebase from 'firebase';



@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component  {
    public name: any;
    public age: any;
    public vikram: any;
    public id: any;
    public uid: any;
    public uidd: any;
    public testining: any;
    listings:any;
    imageUrl:any;
    listing:any;
    idd:any;
    sizeSubject: Subject<any>;


    //public profile: FirebaseListObservable<Profile>;
    public profile: FirebaseListObservable<Profile>;
    public testing: FirebaseObjectObservable<any>;


    public auth: FirebaseListObservable<any>;

    constructor(private af: AngularFire,
                private firebaseService:FirebaseService,
                private router:Router,
                private route:ActivatedRoute,

    ) {
        this.id= this.route.snapshot.params['id'];
        console.log('afafafasfadsf',this.id);
        this.idd=this.id;
        console.log('afaskfjfafakhlfaklj',this.id);
        this.firebaseService.getListingDetailings(this.id).subscribe(listing=>{
            //console.log(listing);
            this.listing=listing;

            let storageRef = firebase.storage().ref();
            let sapceRef= storageRef. child(this.listing.path);

            storageRef.child(this.listing.path).getDownloadURL().then((url)=>{
                this.imageUrl=url;
            }).catch((error)=>{
                console.log(error);
            });
        });
    }



ngOnit(){

}
}
interface Profile  {
    $key?: string;
    name?:string;
    age?:string;
    uid?:string;
}