import { Action } from '@ngrx/store'



export const ADDOFFER = '[Offer] ADDOFFER';
export const CLEANOFFER = '[Offer] CLEANOFFER';


export class AddOffer implements Action{
    readonly type = ADDOFFER;
    
    constructor( readonly payload : { 
        id : String,
        name : String,
        characteristics : []
        productOfferingPrices : []
                  
    }){}

}

export class CleanOffer implements Action{
    readonly type = CLEANOFFER;
   

}