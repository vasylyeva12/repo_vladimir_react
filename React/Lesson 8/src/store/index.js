import { combineReducers, createStore } from "redux";
import reducer from "./reducers/reducer";

const reducers = combineReducers({
    reducer,
    // users: usersReducer,
    // todos: todosReducer
})

const store = createStore(reducers);

export default store;