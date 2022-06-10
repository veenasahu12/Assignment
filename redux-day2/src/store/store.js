import {legacy_createStore , combineReducers ,applyMiddleware, compose} from 'redux'
import {counterReducer} from './counter/counter.reducer'
import {todoReducer} from "./todo/todo.reducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
    counter : counterReducer,
    todo : todoReducer,
})



export const store = legacy_createStore (rootreducer ,composeEnhancers(applyMiddleware(thunk)))

