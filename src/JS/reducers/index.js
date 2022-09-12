import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";
export const rootReducer = combineReducers({ userReducer, authReducer });
