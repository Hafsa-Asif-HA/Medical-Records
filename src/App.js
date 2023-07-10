import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AddPatientRecord from "./components/Home/Add_patient_record";
import { Toaster } from 'react-hot-toast';

import { auth } from "./firebase";

import "./App.css";

function App() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName);
            } else setUserName("");
        });
    }, []);

    return ( <div className = "App" >
        <Router>
        <Routes >
        <Route path = "/Add_patient_record" element = { < AddPatientRecord / > } /> 
        <Route path = "/login"  element = { < Login / > }/> 
        <Route path = "/signup" element = { < Signup / > }/> 
        
        <Route path = "/" element = { < Home name = { userName }/>} />
            </Routes> 
            </Router> <
            Toaster position = 'top-right' / >
            </div>
        );
    }

    export default App;