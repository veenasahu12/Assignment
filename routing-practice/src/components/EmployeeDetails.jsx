import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export const EmployeeDetails = () => {

  const params = useParams()
  const [data,setData] = useState([]);

  console.log(params);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/employee/${params.id}`,
      method : "GET"
    })
    .then((r) => {
      console.log(r)
      setData(r.data)
    })
    .catch((err) => {
      console.log(err.message)
    })
  },[params.id])

  console.log(data);

  return (
    <div className="user_details" key={data.id}>
      <img className="user_image" src={data.image} alt=""/>
      <h4 className="user_name">Username : {data.username}</h4>
      <span className="user_salary">${data.salary}</span>
      <span className="tasks">
        {data?.tasks?.map((e , index) => {
          return <li className="task" key={index}>{e}</li>
        })}
      </span>
      Status: <b className="status">{data.status}</b>
      Title: <b className="title">{data.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      {data?.status !== "terminated"? 
      <button className="fire">Fire Employee</button>
      : ""}
      {/* Show this button only if user is not already team lead or terminated */}
      {data?.status !== "terminated" && data?.title !== "Team Lead"?
      <button className="promote">promote</button>
       : ""}
    </div>
  );
};
