import React from 'react'
import { useReducer } from 'react'

const AuthContext = React.createContext()

const initalstate = {
    isAuth : false,
    token : null,
    totalemp : 0,
    total_terminated : 0,
    total_promoted : 0,
    total_new: 0,
    data:[],
}

function reducer(state , action){
    console.log(state ,action)
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
          default: {
            return state;
          }
        }
}
export const AuthProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , initalstate)
    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
