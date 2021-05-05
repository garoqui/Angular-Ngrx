import { Action } from '@ngrx/store'
import { ADDOFFER, CLEANOFFER } from '../actions/offer.action'
import { Offer } from '../model/offer'


interface customAction{
    type : string,
    payload : string
}

const initialState = {    
    offer : new  Offer("","", [], [])    
}

export function offerReducer(state  = [initialState ]  , action : customAction){

    switch( action.type){

        case  ADDOFFER:
            
            return [action.payload]

        case  CLEANOFFER:
            state = undefined
            return state

        
    }

}