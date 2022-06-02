import React from 'react'
import { useContext } from 'react'
import {Navigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

const Feeds = (props) => {
    // const navigate = useNavigate();
    const {isAuth} = useContext(AuthContext)

    if(isAuth){
    return 
        <div> Feeds</div>;
    }else{
       <Navigate to="/login" />
    }
    
}

export default Feeds
