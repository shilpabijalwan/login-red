import {applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import {reducer as authReducer} from "./Auth/reducer"
const rootReducer=combineReducers({
    authReducer:authReducer,
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))