import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Offer } from "../../model/offer"

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  char = []
  charFilter = []

  constructor(private store : Store<Offer>) {
    
   }

  ngOnInit() {
    this.getChar()
  }

  //obtener oferta desde el state
  getChar = ()=>{
    
    this.store.subscribe( (res:any) =>{
      this.charFilter = []      
      let offer = []
      if(res.offer){
        offer = res.offer[0].characteristics
        let versionsOffer : any = []
        offer.map((res:any)=>{
          versionsOffer = res
          versionsOffer.versions.map(res=>{
            this.charFilter.push({name : res.name})
          
          })
        })
       

        
        

                  
      }
      
    })
  }

}
