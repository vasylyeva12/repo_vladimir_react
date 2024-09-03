import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/user";
import countReducer from "./reducers/count";

const store = createStore(countReducer, applyMiddleware(thunk));

export default store;