import axios from "axios";
import { GET_USERS, FAILURE } from "../actionsTypes/UserActionsTypes";
export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:3000/users");
        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: FAILURE,
            payload: error,
        });
    }
};
export const addUser = (user) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:3000/users", user);
        dispatch({
            type: "ADD_USER",
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`http://localhost:3000/users/${id}`);
        dispatch({
            type: "DELETE_USER",
            payload: res.data,
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};
