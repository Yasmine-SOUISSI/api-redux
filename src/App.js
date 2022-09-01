import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { addUser, deleteUser, getUsers } from "./JS/actions/UserActions";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers(dispatch));
    }, [dispatch]);
    const users = useSelector((state) => state.userReducer.users);
    const error = useSelector((state) => state.userReducer.error);
    console.log(users);
    console.log(error);
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <div className="App">
            {error && <div className="error">{error}</div>}
            <div className="users">
                {users.map((user) => (
                    <div key={user.id}>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        <div>{user.username}</div>
                        <button onClick={() => dispatch(deleteUser(user.id))}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    dispatch(addUser({ ...user, id: Math.random() }, dispatch));
                }}
            >
                Add User
            </button>
        </div>
    );
}

export default App;
