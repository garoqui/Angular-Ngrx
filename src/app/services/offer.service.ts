import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLOFFER } from '../constants/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor( private HttpClient : HttpClient) { }


  getOffer = ()=>{
    return this.HttpClient.get( URLOFFER)
  }
}
