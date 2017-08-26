import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: any;
  listing: any;
  imageUrl:any;
  name:any;
  plateform:any
  uid:any;
  uidd:any;
  vikram:string;
  rakesh:string;
  vikram1:string;
  rakesh1:string;
  testing:any;
  title:any;
  idd:any;
  desinyRR:any;
  desinyR:any;
  game2:any;
  game3:any;
  game4:any;
  diablo:any;
  left4dead2:any;
  world:any;



  public destiny : FirebaseListObservable<any>;
  public Diablo : FirebaseListObservable<any>;
  public Left4Dead2 : FirebaseListObservable<any>;
  public WorldofWarcraft : FirebaseListObservable<any>;
  public gettingusername : FirebaseListObservable<AddingUser>;

  constructor(
      private firebaseService:FirebaseService,
      private router:Router,
      private route:ActivatedRoute,
      private af: AngularFire



  ) {
    this.destiny = this.af.database.list("/destiny");
    this.Diablo = this.af.database.list("/Diablo");
    this.Left4Dead2 = this.af.database.list("/Left4Dead2");
    this.WorldofWarcraft = this.af.database.list("/WorldofWarcraft");
    this.gettingusername = this.af.database.list("/listings");
    this.desinyRR="Destiny";
    this.game2="Diablo";
    this.game3="Left4Dead2";
    this.game4="WorldofWarcraft";
    
    this.destiny.subscribe(desinyR=>{
      this.desinyR=desinyR;
      console.log(desinyR);
    });
    this.Diablo.subscribe(diablo=>{
      this.diablo=diablo;
      console.log(diablo);
    });
    
    this.Left4Dead2.subscribe(left4dead2=>{
      this.left4dead2=left4dead2;
      console.log(left4dead2);
    });
    
    this.WorldofWarcraft.subscribe(world=>{
      this.world=world;
      console.log(world);
    });
    
    
  }

  ngOnInit() {



    // Adding auth for UID
    this.af.auth.subscribe(auth => {
      //console.log('auth', auth.uid);
      // this.uidd = auth.uid;
      this.uid = auth.uid;
      this.uidd=this.uid;
      //console.log('auth', this.uid);

    });


    // end auth for uid

    this.id= this.route.snapshot.params['id'];
    this.idd=this.id;
    console.log('afaskfjfafakhlfaklj',this.id);
    this.firebaseService.getListingDetails(this.id).subscribe(listing=>{
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
  
 

  onAdduser(){

    this.vikram="-KhiIxNslZXWWRyAfb5n";
    this.rakesh="-KhjhKro8L0Kt68EozT_";
    this.vikram1="-KhsFZNIkHwY3giAGcGU";
    this.rakesh1="-KhsGbanFRGpDG-y9xzd";
    let addinguser={
      name:this.name,
      plateform:this.plateform,
    }
    console.log("vikram", this.plateform);
    this.id= this.route.snapshot.params['id'];
    if(this.vikram==this.id){
      this.destiny.push(addinguser);
    }
    if(this.rakesh==this.id){
      this.Diablo.push(addinguser);
    }
    if(this.vikram1==this.id){
      this.Left4Dead2.push(addinguser);
    }
    if(this.rakesh1==this.id){
      this.WorldofWarcraft.push(addinguser);
    }



  }

}

interface AddingUser  {
  $key?: string;
  name?:string;
  plateform?:string;
  uid?:string;
}
