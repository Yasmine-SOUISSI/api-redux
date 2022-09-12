import React from "react";

export default function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");
    return <div>{token ? children : <h1>Not Authorized</h1>}</div>;
}
