import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CleanOffer, CLEANOFFER } from 'src/app/actions/offer.action';
import { Offer } from 'src/app/model/offer';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {


  priceFilter = []

  constructor(private store : Store<Offer>) { }

  ngOnInit() {
    
    this.getPrices()
  }

  getPrices = ()=>{
      
    this.store.subscribe( (res:any) =>{
      this.priceFilter= []  
      let offer = []
      if(res.offer){
        offer = res.offer[0].productOfferingPrices
        let versionsOffer : any = []
        offer.map((res:any)=>{
          versionsOffer = res
          versionsOffer.versions.map(res=>{
            this.priceFilter.push( {name: res.name, price : res.price.amount})          
          })
        })
      }
    })
  }

  

}
