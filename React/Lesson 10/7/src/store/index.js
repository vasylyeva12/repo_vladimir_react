import { combineReducers, createStore } from "redux";
import ProductReducer from "./reducers/product";

// const reducers = combineReducers({
//     products: productReducer,
//     users: userReducer
// })

const store = createStore(ProductReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;