import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {isSuccess} from "@angular/http/src/http_utils";
import {FirebaseService} from "../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public name:any;
  public age:any;
 public uid: any;
 public uidd:any;
    playerid:any;
    playzone:any;
    time1:any;
    time2:any;
    time3:any;
    time4:any;
    gamen:any;
    gamep:any;
 public  testing2: any;
 private vikram:any;
 public message:any;
 public totaluser:number;
 public profiles:any;



  public profile: FirebaseListObservable<Profile>;
    public testing: FirebaseListObservable<any>;

  public auth: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire,
              private firebaseService: FirebaseService,
              private router:Router) {


          this.testing = this.af.database.list("/profile", {preserveSnapshot: true});
      this.profile = this.af.database.list("/profile");
      this.profile.subscribe(profile=> {
        this.profiles=profile;
        console.log(this.profiles);
      })




  }

  ngOnInit() {
      this.af.auth.subscribe(auth => {
          //console.log('auth', auth.uid);
          // this.uidd = auth.uid;
          this.uid = auth.uid;
          this.uidd=this.uid;
          //console.log('auth', this.uid);

      });
      this.testing.subscribe(snapshot => {
          this.totaluser=snapshot.length;
      });
  }


  onProfile(){
    let profile={
      uid:this.uid,
      name:this.name,
      age:this.age,
        playerid:this.playerid,
        playzone:this.playzone,
        time1:this.time1,
        time2:this.time2,
        time3:this.time3,
        time4:this.time4,
        gamen:this.gamen,
        gamep:this.gamep


    }
      //this.profile.push(profile);
      this.testing2= this.testing.subscribe(snapshot => {
          console.log(snapshot.length);
          snapshot.forEach(snapshotr => {
                    console.log(snapshotr.length);
              snapshotr.forEach(snapshotss => {
                  if (this.uid ==snapshotss.val()) {
                      console.log('every value', this.uid, snapshotss.val());
                      this.vikram=this.uid;
                      //console.log("faf",this.uid);
                  }




              });

          });
          if(this.uidd=!this.vikram){
              this.firebaseService.addprofile(profile)
              this.router.navigate(['profile']);
          }
          else{
              console.log('already in database');
              this.message="**Please Update your Profile, You already have a profile**";
          }
          console.log('uid from if condition',this.vikram);
      });

    /*if(this.uidd=!this.vikram){
        this.profile.push(profile);
    }
    else{
        console.log('already in database');
    }*/
      console.log('uid from if condition outside',this.vikram);




  }

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
}
