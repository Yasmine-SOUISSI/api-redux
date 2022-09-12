import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
import PrivateRoute from "./Routes/PrivateRoute";
import Home from "./Components/Home";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<SignUpForm />} />
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/signIn" element={<SignInForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
