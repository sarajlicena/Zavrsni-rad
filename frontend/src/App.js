import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Home from './pages/HomePage'
import Signup from './pages/SignupPage';
import Login from './pages/LoginPage';
import Profile from './pages/ProfilePage';
import ChatGPT from './components/ChatGPT'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/signup"} element={<Signup/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/profile"} element={<Profile/>} />
        <Route path={"/mydata"} element={<ChatGPT/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;