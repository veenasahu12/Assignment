import { useState } from "react";
import axios from 'axios'
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import {Navigate} from 'react-router-dom'

export const Login = () => {
  //  use reqres to log user in.
  const [state, dispatch] = useContext(AuthContext)
  const [form ,setForm] = useState({
       username: "",
       password : "",
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
    return <Navigate to="/employees" />
  }

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
