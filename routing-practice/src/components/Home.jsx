import { useContext } from "react";
import  AuthContext  from "../Context/AuthContext";
import axios from 'axios'
import { useEffect ,useState} from 'react';

export const Home = () => {

  const  [state]  = useContext(AuthContext);
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
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">{employee.length}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{state.total_terminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{state.total_promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{state.total_new}</span>
        </div>
      </div>
    </>
  );
};
