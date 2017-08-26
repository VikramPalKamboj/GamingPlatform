import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title:any;
  plateform1:any;
  plateform2:any;
  plateform3:any;
  plateform4:any;
  plateform5:any;
  character:any;
  type:any;
  image:any;
  constructor(
    private firebaseService: FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onAddSubmit(){
    let listing={
      title: this.title,
      character: this.character,
      plateform1: this.plateform1,
      plateform2: this.plateform2,
      plateform3: this.plateform3,
      plateform4: this.plateform4,
      plateform5: this.plateform5,

  }
    this.firebaseService.addListing(listing)
    this.router.navigate(['listings']);
  }

}
