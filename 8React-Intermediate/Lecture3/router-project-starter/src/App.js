import "./App.css";
import Navbar from "./Component/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import PrivateRoute from "./Component/PrivateRoute";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn ={isLoggedIn} >
            <Dashboard />

          </PrivateRoute>
        } />

      </Routes>

    </div>
  )
}

export default App;
