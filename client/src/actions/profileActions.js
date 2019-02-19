import axios from "axios";

import {GET_PROFILE, CLEAR_CURRENT_PROFILE} from "./types";

export const getProfile = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/users/${userId}`);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_PROFILE,
            payload: "no user"
        })
    }
};

export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}