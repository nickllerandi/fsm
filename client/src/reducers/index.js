import {combineReducers} from "redux";
import authReducer from "./authReducer";
import questionReducer from "./questionReducer";
import errorReducer from "./errorReducer";
import testReducer from "./testReducer";


export default combineReducers({
    authReducer,
    questionReducer,
    errorReducer,
    testReducer
});