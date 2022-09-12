import {
    CURRENT_USER,
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP,
} from "../actionsTypes/AuthActionsTypes";
import { FAILURE } from "../actionsTypes/UserActionsTypes";

const initialState = {
    isAuthenticated: false,
    users: [],
    user: {},
    errors: "",
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuthenticated: action.payload.isAuth,
                user: action.payload.user,
                errors: action.payload.errors,
            };
        case SIGN_OUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {},
            };
        case SIGN_UP:
            return {
                ...state,
                user: action.payload,
            };
        case FAILURE:
            return {
                ...state,
                errors: action.payload,
            };
        case CURRENT_USER:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};
