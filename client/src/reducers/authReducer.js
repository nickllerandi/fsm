import {SET_CURRENT_USER} from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}

// MOVE ME TO SRC/VALIDATION OR SRC/UTILS
const isEmpty = (data) => {
    return (
        Object.keys(data).length === 0
    )
};