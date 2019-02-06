import axios from "axios";

import {GET_QUESTIONS, CREATE_QUESTION, GET_ERRORS} from "./types";

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

export const createQuestion = (newQuestionData, history) => async dispatch => {
    try {
        const res = await axios.post("/api/questions", newQuestionData);
        dispatch({
            type: CREATE_QUESTION,
            payload: res.data
        });
        history.push("/");
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

