import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO,} from "./todo.action.type"

export const todoReducer = (state = {todos: []} , {type , payload}) => {
    // console.log(state , action);
    switch(type){
        case ADD_TODO: {
            return {
            ...state,
            todos: [
                ...state.todos,
                {
                    ...payload,
                    id:state.todos.length,
                }
            ]
            }
        }
        case DELETE_TODO: {
            return {...state} 
        }
        case UPDATE_TODO: {
            return {...state} 
        }
        case COMPLETE_TODO: {
            return {...state} 
        }
        default:{
          return state 
        }
    }
}
