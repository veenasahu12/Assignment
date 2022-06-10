import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div style={{display:'flex' , gap:"20px" , padding:"30px" , fontSize:"30px"}}>
            <Link to="/">COUNTER APP</Link>
            <Link to="/todoapp">TODO APP</Link>
        </div>
    )
}

export default Navbar
