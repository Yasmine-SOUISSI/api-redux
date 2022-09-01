import { GET_USERS, FAILURE } from "../actionsTypes/UserActionsTypes";

const initialState = {
    user: {},
    users: [],
    error: null,
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(
                    (user) => user.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
}
