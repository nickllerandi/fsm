import axios from "axios";

import {GET_PROFILE} from "./types";

export const getProfile = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/users/${userId}`);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
};