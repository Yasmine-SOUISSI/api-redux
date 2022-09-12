import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../JS/actions/AuthActions";

export default function SignUpForm() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(
                            signUp({
                                ...user,
                                token: Math.random().toString(),
                            })
                        );
                    }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
