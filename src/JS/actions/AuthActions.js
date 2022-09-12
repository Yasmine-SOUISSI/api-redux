import axios from "axios";
import {
    CURRENT_USER,
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP,
} from "../actionsTypes/AuthActionsTypes";
import { FAILURE } from "../actionsTypes/UserActionsTypes";

export const signUp = (user) => async (dispatch) => {
    try {
        // add user to the users collection
        const res = await axios.post("http://localhost:3000/users", user);
        dispatch({
            type: SIGN_UP,
            payload: res.data,
        });
        console.log(res);
    } catch (error) {
        dispatch({
            type: FAILURE,
            payload: error,
        });
    }
};

export const signIn = (user, navigate) => async (dispatch) => {
    try {
        // get users from the users collection
        const res = await axios.get("http://localhost:3000/users");
        console.log(res);
        // check if the user exists
        const filterUser = res.data.find(
            (el) => el.email === user.email && el.password === user.password
        );
        console.log(filterUser);
        // if the user exists
        if (filterUser) {
            // dispatch the action to the reducer
            dispatch({
                type: SIGN_IN,
                payload: {
                    isAuth: true,
                    user: filterUser,
                    errors: "",
                },
            });
            console.log(filterUser.token);
            // save the token&id in the local storage
            localStorage.setItem("token", filterUser.token);
            localStorage.setItem("id", filterUser.id);
            // navigate to the home page
            navigate("/home");
        } else {
            // if the user doesn't exist
            // dispatch the action to the reducer
            dispatch({
                type: SIGN_IN,
                payload: {
                    isAuth: false,
                    user: {},
                    errors: "Invalid email or password",
                },
            });
        }
    } catch (error) {
        dispatch({
            type: FAILURE,
            payload: error,
        });
    }
};

export const signOut = (navigate) => {
    // remove the token&id from the local storage
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    // navigate to the home page
    navigate("/");
    return {
        type: SIGN_OUT,
    };
};

export const currentUser = () => async (dispatch) => {
    // get id from local storage
    const id = localStorage.getItem("id");
    try {
        // get user by ID from the users collection
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        // dispatch the action to the reducer
        dispatch({
            type: CURRENT_USER,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: FAILURE,
            payload: error,
        });
    }
};
