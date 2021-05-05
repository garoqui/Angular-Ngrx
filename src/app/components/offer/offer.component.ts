import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Offer } from "../../model/offer"

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  id : String
  name : String

  constructor(private store : Store<Offer>) {
   
   }

  ngOnInit() {
    this.getOffer()
  }

  

  //obtener oferta desde el state
  getOffer = ()=>{
    this.store.subscribe( (res:any) =>{
      let offer = []
      if(res.offer){
        console.log(res.offer[0])
        this.id= res.offer[0].id
        this.name= res.offer[0].name
                  
      }
      
    })
  }

 
  

}
