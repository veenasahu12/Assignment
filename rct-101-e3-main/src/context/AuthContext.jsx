import React, { createContext } from "react";
import { useReducer } from "react";

export const AuthContext = createContext();

const initalstate = {
  isAuth : false,
  token : null,
   counter : 0,
}

function reducer(state,action){
  switch(action.type){
    case "LOGIN_SUCCESS":{
        return{
            ...state,
            isAuth : true,
            token : action.token
        }
    }
    case "LOGOUT_SUCCESS":{
        return{
            ...state,
            isAuth : false,
            token : null
        }
    }
    case "LOGIN_FAILURE": {
        return {
          ...state,
          isAuth: false,
          token: null
        };
      }
      case "inc": {
        return{
        ...state,
        counter: state.counter + 1
        }
      }
      case "dec": {
        return{
          ...state,
          counter: state.counter - 1
          }
      }
      default: {
        return state;
      }
    }
}

export const AuthProvider = ({ children }) => {

  const [ state , dispatch] = useReducer(reducer , initalstate);
  return <AuthContext.Provider value={[state,dispatch]}>{children}</AuthContext.Provider>;
};
