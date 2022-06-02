import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import CartContext from '../context/CartContext'
import ThemeContext from '../context/ThemeContext'
import Wislist from './Wislist'


const Navbar = (props) => {

   const {isAuthorised,login,logout} = useContext(AuthContext);
   const {buy} = useContext(CartContext);
   const { isLight , toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            <h1>Navbar</h1>
            <button onClick={() => {
                if(isAuthorised) logout();
                else login("R" , "Z");
            }}>
                {isAuthorised ? "Logout" : "Login"}
                </button>
                <button onClick={buy}>Buy</button>
                <button onClick={toggleTheme}>{`Mase ${isLight ? "Dark" : "Light"}`}</button>
            {isAuthorised && <Wislist/>}
        </div>
    )
}

export default Navbar
