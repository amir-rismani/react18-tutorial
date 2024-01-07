import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

function fetchUserRequest() {
    return { type: FETCH_USER_REQUEST }
}

function fetchUserSuccess(data) {
    return { type: FETCH_USER_SUCCESS, payload: data }
}

function fetchUserFailure(err) {
    return { type: FETCH_USER_FAILURE, payload: err.message }
}

// export const fetchUsers = () => () => {};
export function fetchUsers() {
    return (dispatch) => {
        // dispatch({ type: FETCH_USER_REQUEST })
        // or
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => dispatch(fetchUserSuccess(data)))
            .catch(err => dispatch(fetchUserFailure(err)))
    }
}