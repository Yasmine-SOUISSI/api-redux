import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../JS/actions/AuthActions";

export default function SignInForm() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const errorMessage = useSelector((state) => state.authReducer.errors);
    console.error(errorMessage);
    const isAuth = useSelector((state) => state.authReducer.isAuthenticated);
    console.log(isAuth);
    return (
        <div>
            <h1>SignInForm</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                required
                onChange={handleChange}
            />
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(signIn(user, navigate));
                }}
            >
                Sign In
            </button>
        </div>
    );
}
