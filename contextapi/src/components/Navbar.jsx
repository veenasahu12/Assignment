import React from 'react'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import ThemeContext from '../Context/ThemeContext';
import { styles } from '../Context/Style';

const Navbar = (props) => {

    const {isAuth , toggleAuth} = useContext(AuthContext);
    const {theme ,toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <button onClick={toggleAuth}>{isAuth ? "Logout" : "Login"}</button>
            <button onClick={toggleTheme}>{theme === styles.light ? "Dark Mode" : "Light Mode"}</button>
        </div>
    )
}

export default Navbar
