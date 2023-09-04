import React, { useState, useContext, useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../styles/components/LoginForm.css";
import SidebarMenu from './SidebarMenu';
import '../styles/components/SidebarMenu.css'
import UserContext from "../context/userContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({});
    setEmail("");
    setPassword("");
    localStorage.clear();
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      const res = await axios.post("http://localhost:3001/login", user);
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));

    } catch (error) {
      alert("Wrong email or password")
    }
  };

  if (user) {
    return (
      <div>
        {user.name} is loggged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
       <div className="signDiv">
        <div className="title">
            <p className="titlep1">Welcome!</p>
        </div>

        <div className="signUpLogin">
        <p className="login"><Link className="link" to="/login">Sign In</Link></p>
          <p className="signUp"><Link className="link" to="/signup">Sign Up</Link></p>
        </div>
        <br></br>
        <br></br>
        <div className="details">
        <label><p className="description">Email</p></label>
        <input className="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label><p className="description">Password</p></label>
        <input className="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <br></br>
        <button className="signinbtn" type="submit">Sign In</button>
        <p className="signupreminder">Don't have an account?<button ><Link to="/signup">Sign Up</Link></button></p>
        </div>
    </form>
  );

};

export default LoginForm;
