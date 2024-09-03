import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../types";

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (payload) => ({
    type: FETCH_USERS_SUCCESS,
    payload
});

export const fetchUsersFailure = (payload) => ({
    type: FETCH_USERS_FAILURE,
    payload
});

export const fetchUsers = () => {
    return async dispatch => {
        dispatch(fetchUsersRequest());

        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")

            let data = await response.json();

            dispatch(fetchUsersSuccess(data))
        }catch(err) {
            dispatch(fetchUsersFailure(err))
        }
    }
}
