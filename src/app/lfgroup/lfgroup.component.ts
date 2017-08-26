import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseService} from '../services/firebase.service';



@Component({
  selector: 'app-lfgroup',
  templateUrl: './lfgroup.component.html',
  styleUrls: ['./lfgroup.component.css']
})
export class LfgroupComponent implements OnInit {

  gamen:any;
  gamep:any;
  matechEvent:any;
  teamType:any;
  playzone:any;
  lfgroups:any;
  lfgroupss:any;
  listings:any;
  search:any;
  description:any;
  uid:any;
  uidd:any;
  search1:any;
  search2:any;
  search3:any;
  search4:any;

  public lfgroup: FirebaseListObservable<LfGroup>;
  public lfgroup1: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire,private firebaseService:FirebaseService) { 
    
    this.af.auth.subscribe(auth => {
          console.log('auth', auth.uid);
          // this.uidd = auth.uid;
          this.uid = auth.uid;
          this.uidd=this.uid;
          //console.log('auth', this.uid);

      });
    
     this.lfgroup = this.af.database.list("/lfgroup");
      this.lfgroup1 = this.af.database.object("/lfgroup");
     this.lfgroup.subscribe(listings=>{
       this.listings=listings;
     })
  }

  ngOnInit() {
     
  }
onMatchRequest(){
  let matchRequest={
    gamen:this.gamen,
    uid:this.uid,
    gamep:this.gamep,
    matechEvent:this.matechEvent,
    teamType:this.teamType,
    playzone:this.playzone,
    description:this.description,
  }
  this.lfgroup.push(matchRequest);
}

delete() {
    this.lfgroup1.remove();
  }

searchProps(){
    this.firebaseService.getListingsByGamen(this.search.toLowerCase()).subscribe(listings => {
      this.listings = listings;
      console.log(listings);
    });
  }
  searchProps2(){
    this.firebaseService.getListingsByGamep(this.search1.toLowerCase()).subscribe(listings => {
      this.listings = listings;
      console.log(listings);
    });
  }
searchProps3(){
    this.firebaseService.getListingsByTeamtype(this.search2.toLowerCase()).subscribe(listings => {
      this.listings = listings;
      console.log(listings);
    });
  }
  searchProps4(){
    this.firebaseService.getListingsByMatchEvent(this.search3.toLowerCase()).subscribe(listings => {
      this.listings = listings;
      console.log(listings);
    });
  }

}


interface LfGroup {
  
  $key?: string;
  uid?:string;
  gamen?:string;
  gamep?:string;
  matechEvent?:string;
  teamType?:string;
  playzone?:string;
  description?:string;
  
}