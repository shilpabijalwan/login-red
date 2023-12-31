import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./Auth/reducer";
import { reducer as productReducer } from "./Productreducer/reducer";
const rootReducer = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
