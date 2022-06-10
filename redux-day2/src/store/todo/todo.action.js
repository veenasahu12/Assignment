import {ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    COMPLETE_TODO,
    DELETE_TODO,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_TODO_LOADING,
    UPDATE_TODO} from './todo.action.type'
import axios from 'axios'

export const getTodos = () => (dispatch) => {
    dispatch({type: GET_TODO_LOADING})
return axios
.get("http://localhost:8080/products")
.then((r) => {
    console.log(r);
    setTimeout(() => {
        dispatch({type: GET_TODO_SUCCESS , payload : r.data})
    },5000)
}).catch(() => {
    dispatch({type: GET_TODO_ERROR})
})
}

export const Addtodo = (payload) => (dispatch) => {
    dispatch({type: ADD_TODO_LOADING})
    return axios
.post("http://localhost:8080/products" , payload)
.then((r)=> {
    console.log(r.data);
   dispatch({type: ADD_TODO_SUCCESS , payload: r.data})
}).catch(() => {
    dispatch({type: ADD_TODO_ERROR , payload});
})
}
export const todocomplete = (id) => ({type: COMPLETE_TODO , payload : id});
export const tododelete = (payload) => ({type: DELETE_TODO , payload});
export const todoupdate = (updateTodo) => ({type: UPDATE_TODO , payload : updateTodo});