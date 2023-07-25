import React, { useState,useEffect } from 'react';
import './Signin.css';
import { useDispatch } from "react-redux";
import { login } from "./UserSlice";
import jwt_decode from 'jwt-decode'

import {Link, useNavigate} from "react-router-dom"

const Signin1Page = () => {

  const[user,setUser]=useState({});
  function handleCallbackResponse(response){
    console.log("JWT ID token: "+response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
    navigate('./Home');
  }

useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"258874067822-db5dj6ah0mltrl241rrponk41t15be9t.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    );
  });

  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState('');
  
  // const [email, setEmail] = useState('')

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(
    //   login({
    //    name:username
    //   })
    // )
    navigate('./UserHome')
    };


  return (
        <div className='logo'>
      
    <div className="login-page">
      
    <div className="login1-page">
      <div className="login-container">
        <h2>User Login</h2>
        <p className='ab'>.....................................................................................</p>
        <br/>
        <form onSubmit={handleSubmit}>
            <h4 className='a'>Username:</h4>
          <input className='logininput'
          type="text"
          value={username}
          name="username"
          onChange={(event) => setUsername(event.target.value)} 
          placeholder="Enter your Username"
          required/> 

{/* <label name="username">USERNAME</label>
       <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}  required/> */}

          <h4 className='a'>Password:</h4>  
          <input className='logininput' 
          type="password" 
          value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your Password" 
          required/>

           <button onSubmit={(e) => handleSubmit(e)} className='but' type="submit">Login</button>
          <h3>------------- or -------------</h3>
          <center><div className="google" id='signInDiv' ></div></center><br/>
        </form>
          <br/><h4 className='ad'>New User?</h4>
          <div className="create"><Link to="/Signup"><div className="b"><u>Create New Account</u></div></Link></div>  
          </div>
      </div>
      <div>
    </div>
    </div></div>
    
  );
};

export default Signin1Page;
