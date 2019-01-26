import axios from "axios";

import {GET_QUESTIONS} from "./types";

export const getQuestions = () => async dispatch => {
    try {
        const res = await axios.get("/api/questions");
        dispatch({
            type: GET_QUESTIONS,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
};