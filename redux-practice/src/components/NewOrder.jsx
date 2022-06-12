import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postorders } from "../Redux/actions";
import axios from "axios"

export const NewOrder = () => {
  
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  const dispatch = useDispatch()
  const [userorder , setUserOrder] = useState([]);
  const user = useSelector((state) => state.LoggedIn.user)
  console.log(user)
  const [form , setForm] = useState({
    owner_name: user.username,
    problem : "",
    brand: "",
  })

  const handlechange = (e) => {
    const {name , value} = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = () => {
   console.log(form)
   const payload = {
     ...form,
     cost: "",
    status: "Not Accepted"
   }
dispatch(postorders(payload));
  }

  useEffect(() => {
    axios({
     url: `http://localhost:8080/orders?owner_name=${user.username}`,
     method: "GET",
    }).then((r) => {
      console.log(r)
      setUserOrder(r.data);
    })
  },[])
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
          onChange={handlechange}
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          value={user.username}
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
          onChange={handlechange}
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit" onClick={handleSubmit}>submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        {userorder.map((item)=> {
          return <div className="past-orders" key={item.id}>
          <span className="id">{item.id}</span>. <span className="problem">{item.problem}</span>{" "}
          <span className="cost">
           {item?.status === "Not Accepted" ? "" : item.cost}
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
          </span>
          <p className="status">Status:{item.status}</p>
          <hr />
        </div>
        })}
        
      </div>
    </div>
  );
};
