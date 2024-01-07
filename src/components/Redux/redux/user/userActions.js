import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
// export const fetchUsers = () => () => {};
export function fetchUsers() {
    return (dispatch) => {
        dispatch({ type: FETCH_USER_REQUEST })
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => dispatch({ type: FETCH_USER_SUCCESS, payload: data }))
            .catch(err => dispatch({ type: FETCH_USER_FAILURE, payload: err.message }))
    }
}