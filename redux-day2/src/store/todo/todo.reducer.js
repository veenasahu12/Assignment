import { ADD_TODO_SUCCESS, ADD_TODO_LOADING , ADD_TODO_ERROR ,COMPLETE_TODO , DELETE_TODO , GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, UPDATE_TODO} from "./todo.action.type"


const initialstate = {
    getTodos : {
        loading:false,
        error:false,
        todos: []
    },
    Addtodo : {
        loading:false,
        error:false,
        data: {}
        },
}
export const todoReducer = (state = initialstate , {type , payload}) => {
    console.log(state , type,payload);
    switch(type){
        case GET_TODO_LOADING: {
            return {
                ...state,
                getTodos: {
                    ...state.getTodos,
                    loading: true,
                }
            } 
        }
        case GET_TODO_SUCCESS: {
            return {
                ...state,
                getTodos: {
                    ...state.getTodos,
                    loading: false,
                    data: payload,
                }
            } 
        }
        case GET_TODO_ERROR: {
            return {
                ...state,
                getTodos: {
                    ...state.getTodos,
                loading:false,
                error: true
                }
            } 
        }
        case ADD_TODO_LOADING: {
            return {
                ...state,
                Addtodo: {
                    ...state.getTodos,
                    loading: true,
                }
            } 
        }
        case ADD_TODO_SUCCESS: {
            return {
                ...state,
                getTodos:{
                    data: [...state.getTodos.data , payload]
                },
                Addtodo: {
                    ...state.getTodos,
                    loading: false,
                    data: payload,
                }
            } 
        }
        case ADD_TODO_ERROR: {
            return {
                ...state,
                Addtodo: {
                    ...state.getTodos,
                loading:false,
                error: true
                }
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
