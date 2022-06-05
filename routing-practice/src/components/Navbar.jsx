import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export const Navbar = () => {

  const [state] = useContext(AuthContext);
  // console.log(state);
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}

      {state?.isAuth? 
      <Link className="nav-logout" to="/logout">
        Logout
      </Link>
:
      <Link className="nav-login" to="/login">
        Login
      </Link>
}
    </div>
  );
};
