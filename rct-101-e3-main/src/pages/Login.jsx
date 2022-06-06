import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import {Navigate} from 'react-router-dom'

const Login = () => {
  const [state, dispatch] = useContext(AuthContext)
  const [form , setForm] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    const {name , value} = e.target

    setForm({
      ...form,
      [name] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url:"https://reqres.in/api/login",
      method: "POST",
      data: form,
    })
    .then((r) => {
      alert("SUCCESS");
      dispatch({
        type:"LOGIN_SUCCESS",
        token: r.data.token
      })
    })
    .catch((err) => {
      console.log(err.message)
      alert("Error");
    })
  };

  if(state.isAuth){
    return <Navigate to="/Products" />
  }

  return (
    <form onSubmit={handleSubmit}>
      <input data-cy="login-email"  
        name="email"
        type="text"
        placeholder="Enter Email"
        className="login_email"
        onChange={handleChange}
        />
      <input data-cy="login-password" 
         name="password"
         type="text"
         placeholder="Enter password"
         className="login_password"
         onChange={handleChange}
      />
      <button data-cy="login-submit" type="submit">Login</button>
    </form>
  );
};

export default Login;
