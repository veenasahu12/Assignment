import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import ThemeContext from '../Context/ThemeContext'
import { useContext } from 'react'

const Login = (props) => {

    const {theme} = useContext(ThemeContext)
    const [token , setToken] = useState("");
    const [form , setForm] = useState({
        email : "",
        password : "",
    })

const handleChange = (e) => {
    const {id , value} = e.target

    setForm({
        ...form,
        [id]: value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    axios({
        url : "https://reqres.in/api/login",
        method: "POST",
        data: form,

    })
    .then((r) => {
        console.log(r)

        setToken(r.data.token)
    })
}

    return (
        <div style={theme}>
            <form  onSubmit={handleSubmit}>
            <input onChange={handleChange} type="email" placeholder='Enter Email' name='email' id="email" />
            <input onChange={handleChange} type="password" placeholder='Enter Password' name='password' id='password' />
            <input type="submit" />
            </form>

            <h1>Token:{token}</h1>
        </div>
    )
}

export default Login
