import axios from "axios";
import {GET_ERRORS} from "./types";

export const registerUser = (userData, history) => dispatch => {
    axios.post("/api/users/register", userData)
        .then(res => history.push("/login"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// export const registerUser = userData => async dispatch => {
//     try {
//         let res = axios.post("/api/users/register", userData);
//         console.log(res.data);
//     } catch (err) {
//         dispatch({
//             type: GET_ERRORS,
//             payload: err.response.data
//         })
//     }
// };