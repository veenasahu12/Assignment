import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = (props) => {

    const navigate = useNavigate()
    const handleClick = (id) => {
        
          if(id === 1){
              navigate("/products/1")
          }
    }
    return (
        <div>
           <Link to='/' >Home</Link> 
           <Link to='/about'>About</Link>
           <Link to='/products'>Products</Link>
           <button onClick={() => handleClick(1)}>Go To Product 1</button>
        </div>
    )
}

export default Navbar
