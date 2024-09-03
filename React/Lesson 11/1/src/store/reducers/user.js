import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../types";

const initState = {
    users: [],
    loading: false,
    error: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true }
        case FETCH_USERS_SUCCESS:
            return {...state, users: action.payload, loading: false}
        case FETCH_USERS_FAILURE:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}

export default userReducer;