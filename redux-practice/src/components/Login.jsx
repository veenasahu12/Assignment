import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getusers, getLoggedInuser, getorders } from "../Redux/actions";


export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {users} = useSelector((state) => state.getusers)
  useEffect(() => {
     dispatch(getusers()) 
  },[])

  const [form , setForm] = useState({
    
    username: "",
    password: "",
  })

  const handlechange = (e) => {
    const {name , value} = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    console.log(form , users)
    const LoggedIn = users?.map((e) => { 
      if(e.username === form.username && e.pass === form.password){
        console.log(e)
        dispatch(getLoggedInuser(e));
        if(e.role === "admin"){
          dispatch(getorders())
          navigate("/orders")
        }else if(e.role === "client"){
          console.log(e.role,"check")
            navigate("/neworders")
        }
      }
    })
  }
  return (
    <div>
      <input
        onChange={handlechange}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        onChange={handlechange}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};
