import {ADD_TODO,COMPLETE_TODO,DELETE_TODO,UPDATE_TODO} from './todo.action.type'

export const Addtodo = (payload) => ({type: ADD_TODO , payload});
export const todocomplete = (id) => ({type: COMPLETE_TODO , payload : id});
export const tododelete = (payload) => ({type: DELETE_TODO , payload});
export const todoupdate = (updateTodo) => ({type: UPDATE_TODO , payload : updateTodo});