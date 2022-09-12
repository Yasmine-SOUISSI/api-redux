import e from "express";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, signOut } from "../JS/actions/AuthActions";

export default function Home() {
    const dispatch = useDispatch();
    useEffect(
        () =>
            async function fetchData() {
                dispatch(currentUser());
            },

        [dispatch]
    );
    const current = useSelector((state) => state.authReducer.user);
    console.log(current);
    const token = localStorage.getItem("token");
    return <div>{token && <p>Logout</p>}</div>;
}
