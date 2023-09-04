import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../styles/components/SignupForm.css";

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/signup", {
        firstName,
        lastName,
        birthday,
        sex,
        height,
        weight,
        email,
        password,
        username
      });
        console.log(res.data);
        navigate('/');

    } catch (error) {
      alert("Korisnik s tim emailom već postoji!");
    }
  };


  return (
        <form  onSubmit={handleSubmit}>
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
          <div className="nameSurname">
            <input className="name" type="text" name="name" value={firstName} placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
            <input className="name" type="text" name="surname" value={lastName} placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
          </div>

          <div className='datesex'>
            <div className='component'>
              <label style={{color:"lightgrey"}}>Birthday</label>
              <input type="date" class="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div className='component'>
              <label style={{color:"lightgrey"}}>Sex</label>
              <select class="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="">--Select--</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
           </div>

           <div className="heightWeight">
            <input className="name" type="number" value={height} name="height" placeholder="Height (in cm)" onChange={(e) => setHeight(e.target.value)}/>
            <input className="name" type="number" value={weight} name="weight" placeholder="Weight (in kg)" onChange={(e) => setWeight(e.target.value)}/>
          </div>
        
          <input className="email" type="text" value={username} name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
          <input className="email" type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input className="password" type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <br></br>

        <button className="signinbtn" type="submit">Sign up</button>
        </div>
        </form>
      
      
  );
}

export default SignupForm;
