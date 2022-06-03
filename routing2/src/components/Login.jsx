import React, {useState} from 'react'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = (props) => {

    const [logincards,setLoginCards] = useState({});
    const {login} = useContext(AuthContext);
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setLoginCards({
            ...logincards,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    }
    return (
        <div>
            Login
            <form  onSubmit={handleSubmit} style={{display:"flex" , flexDirection: "column" ,margin:"auto", maxWidth:"200px",gap: "10px",}}>
               <input type="email" name="email" placeholder='Enter Email' onChange={handleChange}/>
               <input type="password" name="password" placeholder='Enter Password' onChange={handleChange}/>
               <button>Login</button>
            </form>
        </div>
    )
}

export default Login
