import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class FirebaseService {
  listings:FirebaseListObservable<any[]>;
  lfgroups:FirebaseListObservable<any[]>;
   profile:FirebaseListObservable<any[]>;
  listing:FirebaseObjectObservable<any[]>;
  lfgroup:FirebaseObjectObservable<any[]>;
  image:FirebaseObjectObservable<any[]>;
  images:FirebaseListObservable<any[]>;
  mylistings:any;
  folder:any;
  myimages:any;
  constructor(private af:AngularFire) {
    this.folder = 'listingimages';
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    this.lfgroups = this.af.database.list('/lfgroup') as FirebaseListObservable<LfGroup[]>;
    this.profile = this.af.database.list('/profile') as FirebaseListObservable<Profile[]>;
    this.images = this.af.database.list('/images') as FirebaseListObservable<Listing[]>;
    this.mylistings = this.af.database.list('/listings');
  }
  getListings(){
    this.listings=this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings;
  }
  
   getListingDetailings(id){
    this.listing=this.af.database.object('/profile/'+id) as FirebaseObjectObservable<Profile>;
    return this.listing;
  }

  getListingDetails(id){
    this.listing=this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
    return this.listing;
  }
  getListingsByTitle(title: any): Observable<Listing[]> {
    return this.af.database.list('listings')
        .map(_listings => _listings.filter(listing => listing.title.toLowerCase().indexOf(title) !== -1));

  }
  getListingsByPlateform(plateform1: any): Observable<Listing[]> {
    return this.af.database.list('listings')
        .map(_listings => _listings.filter(listing => listing.plateform1.toLowerCase().indexOf(plateform1) !== -1));

  }
  // for lfgroup
  getListingsByGamen(gamen: any): Observable<LfGroup[]> {
    return this.af.database.list('lfgroup')
        .map(_lfgroups => _lfgroups.filter(listing => listing.gamen.toLowerCase().indexOf(gamen) !== -1));

  }
  getListingsByGamep(gamep: any): Observable<LfGroup[]> {
    return this.af.database.list('lfgroup')
        .map(_lfgroups => _lfgroups.filter(lfgroup => lfgroup.gamep.toLowerCase().indexOf(gamep) !== -1));

  }
   getListingsByMatchEvent(matechEvent: any): Observable<LfGroup[]> {
    return this.af.database.list('lfgroup')
        .map(_lfgroups => _lfgroups.filter(lfgroup => lfgroup.matechEvent.toLowerCase().indexOf(matechEvent) !== -1));

  }
  getListingsByTeamtype(teamType: any): Observable<LfGroup[]> {
    return this.af.database.list('lfgroup')
        .map(_lfgroups => _lfgroups.filter(lfgroup => lfgroup.teamType.toLowerCase().indexOf(teamType) !== -1));

  }
  addListing(listing){
    let storageRef=firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path=`/${this.folder}/${selectedFile.name}`;
      let iRef=storageRef.child(path);
      iRef.put(selectedFile).then((snapshot)=>{
        listing.image=selectedFile.name;
        listing.path=path;
        return this.listings.push(listing);
      });
    }
  }
  
   addprofile(listing){
    let storageRef=firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path=`/${this.folder}/${selectedFile.name}`;
      let iRef=storageRef.child(path);
      iRef.put(selectedFile).then((snapshot)=>{
        listing.image=selectedFile.name;
        listing.path=path;
        return this.profile.push(listing);
      });
    }
}
}


interface Listing  {
  $key?: string;
  title?:string;
  character?:string;
  plateform1?:string;
  plateform2?:string;
  plateform3?:string;
  plateform4?:string;
  plateform5?:string;

  image?:string;

}
interface LfGroup  {
  $key?: string;
  gamen?:string;
  gamep?:string;
  teamType?:string;
  matechEvent?:string;
}

interface Profile  {
  $key?: string;
  name?:string;
  age?:string;
  playerid?:string;
  playzone?:string;
  time1?:string;
  time2?:string;
  time3?:string;
  time4?:string;
  gamen?:string;
  gamep?:string;
  uid?:string;
  image?:string;
}
