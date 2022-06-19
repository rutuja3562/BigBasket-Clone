import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as creatStore,
} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/reducer";
const rootReducer = combineReducers({
  products: productReducer,
});

export const store = creatStore(rootReducer, applyMiddleware(thunk));

console.log("State",store.getState())