import Reducer from "./reducers/reducers.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ reduce: Reducer });

export default rootReducer;
