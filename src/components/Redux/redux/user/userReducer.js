import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_USER_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            error: ""
        }
        case FETCH_USER_FAILURE: return {
            loading: false,
            error: action.payload,
            data: []
        }
        default:
            return state
    }
}