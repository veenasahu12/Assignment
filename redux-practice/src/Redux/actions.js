import axios from "axios";

// action types
export const GET_USERS_LOADING = "GET_USERS_LOADING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const GET_ORDERS_LOADING = "GET_ORDERS_LOADING";
export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_ERROR = "GET_ORDERS_ERROR";

export const POST_ORDERS_LOADING = "POST_ORDERS_LOADING";
export const POST_ORDERS_SUCCESS = "POST_ORDERS_SUCCESS";
export const POST_ORDERS_ERROR = "POST_ORDERS_ERROR";


export const GET_LOGGEDIN_USERS = "GET_LOGGEDIN_USERS"


// Action Creators
export const getusers = () => (dispatch) => {
    console.log("getusers")
    dispatch({type: GET_USERS_LOADING})
    return axios 
    .get("http://localhost:8080/users")
    .then((r) => {
        console.log(r)
        setTimeout(() => {
            dispatch({type: GET_USERS_SUCCESS , payload : r.data})
        },1000)
    }).catch(()=>{
             dispatch({type: GET_USERS_ERROR})
    })
}

export const getorders = () => (dispatch) => {
    console.log("getusers")
    dispatch({type: GET_ORDERS_LOADING})
    return axios 
    .get("http://localhost:8080/orders")
    .then((r) => {
        console.log(r)
        setTimeout(() => {
            dispatch({type: GET_ORDERS_SUCCESS , payload : r.data})
        },1000)
    }).catch(()=>{
             dispatch({type: GET_ORDERS_ERROR})
    })
}

export const postorders = (payload) => (dispatch) => {
    console.log("postusers" , payload)
    dispatch({type: POST_ORDERS_LOADING })
    return axios 
    .post("http://localhost:8080/orders" , payload)
    .then((r) => {
        console.log(r)
        setTimeout(() => {
            dispatch({type: POST_ORDERS_SUCCESS})
        },1000)
    }).catch(()=>{
             dispatch({type: POST_ORDERS_ERROR})
    })
}

export const getLoggedInuser = (payload) => ({type: GET_LOGGEDIN_USERS , payload})

