import React from 'react'
import { useContext } from 'react';
import {Link , useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const Navbar = (props) => {
    const {isAuth , logout} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLoginClick = () => {
        if(isAuth){
           logout();
        }else{
        navigate("/login")
        }
    }
    return (
        <div style={{padding: "10px" , display:"flex"}}>
            Navbar:
            <Link To="">Home</Link>
            <Link To="/feeds">Feeds</Link>
            <button onClick={handleLoginClick}>{isAuth? "Logout" : "Login"}</button>
        </div>
    )
}

export default Navbar
