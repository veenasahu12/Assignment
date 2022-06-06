import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {

  const [state] = useContext(AuthContext)
  console.log(state);
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/products">Products</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button">
        <Link to="/login">{state?.isAuth ? "Logout" : "Login"}</Link>
        
      </button>
    </div>
  );
};

export default Navbar;
