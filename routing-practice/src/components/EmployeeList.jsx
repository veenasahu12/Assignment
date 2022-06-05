import axios from 'axios'
import { useEffect } from 'react';
// import { useContext } from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom"
// import AuthContext from '../Context/AuthContext';
import "./All.css"

export const EmployeeList = () => {
  // const [dispatch] = useContext(AuthContext);
  const [employee,setEmployees] = useState([]);

  useEffect(() => {
    axios({
      url:"http://localhost:8080/employee",
      method: "GET",
    })
    .then((r) => {
      console.log(r)
      setEmployees(r.data)
    })
    .catch((err) => {
      console.log(err);
    })
  },[setEmployees])
  return (
    <div className="list_container">
     {employee?.map((item) => (
        <Link to={`/employees/${item.id}`} className="employee_card" key={item.id}>
        <img className="employee_image" src={item.image} alt=""/>
        <span className="employee_name">First_Name: {item.employee_name}</span>
        <span className="employee_title">Title: {item.title}</span>
      {/* On clicking this card anywhere, user goes to user details */}
     </Link>
     ))}
    </div>
  );
};
