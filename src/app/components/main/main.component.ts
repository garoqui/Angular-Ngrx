import { Component, OnInit, ɵɵInheritDefinitionFeature } from '@angular/core';
import { from } from 'rxjs';
import { OfferService } from '../../services/offer.service'
import { Offer } from "../../model/offer"
import { Store } from '@ngrx/store';
import { AddOffer, CleanOffer } from 'src/app/actions/offer.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  offers = []
  offersMenu = []
  

  constructor( private offerService : OfferService, private store : Store<Offer>) { 
     
  }

  ngOnInit() {
    
    this.filterOffer()
    
   
  }

  getOffer = ()=>{

    let promise =  new Promise((resolve, reject)=>{
      this.offerService.getOffer()
      .subscribe( res => resolve( res))
    })

    return promise;
  } 

  chargeOffer = ()=>{
    let promise = new Promise((resolve,reject)=>{
      this.getOffer().then( (res:any) => {
        let offerfilter = []
        offerfilter = res      
        //offerfilter.map( (res:any)=> this.offers.push(res.versions))
        offerfilter.map( (res:any)=> this.offers.push(res.versions)) 
        resolve(this.offers)
    } )      
    });
    return promise;
  }

  filterOffer = ()=>{
    this.chargeOffer().then( (res:any) => {
      let resfilter=[]
      resfilter = res
      resfilter.map((res:any)=>{
        let arr = []
        arr = res
        arr.map( res=> {
        
          this.offersMenu.push(new Offer(res.id,res.name,res.characteristics,res.productOfferingPrices))
        
        })
      })
    })
  }

  changeState = (event)=>{
    this.cleanState()
   
    let id = event.target.value
    let offerSelected = this.offersMenu.filter( res => res.id == id)
    const accion = new AddOffer({id : offerSelected[0].id, name : offerSelected[0].name, characteristics : offerSelected[0].characteristics, productOfferingPrices :offerSelected[0].productOfferingPrices })
    this.store.dispatch(accion)
    
  }

  cleanState = ()=>{
    const accion = new CleanOffer()
    this.store.dispatch(accion)
    
  } 


  

}
