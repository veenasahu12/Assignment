import {COUNTER_INCREMENT , COUNTER_DECREMENT } from "./counter.action.type"

export const counterReducer = (state={count: 0} , action) => {
    console.log(state , action);
    switch(action.type){
        case COUNTER_INCREMENT: {
            state.count++;
            return {...state} 
        }
        case COUNTER_DECREMENT: {
            state.count--;
            return {...state} 
        }
         default:{
          return state 
        }
    }
}
