import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./reducers/usersReducer";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({usersReducer}))

