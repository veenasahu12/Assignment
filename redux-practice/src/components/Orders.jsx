
import { useSelector } from "react-redux";

export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux
  const orders = useSelector((state) => state.getorders.orders)
  console.log(orders)

  return (
    <div>
      <div>
        <div>
          <select className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => {
              return <tr className="orders-row" key={item.id}>
              <td className="id">{item.id}</td>
              <td className="problem">{item.problem}</td>
              <td className="owner">{item.owner_name}</td>
              <td className="status">{item?.status}</td>
              <td className="cost">{item?.cost}</td>
              <td className="change-status">
                {/* Show select dropdown only if status is Not Accepted */}
                <select className="changeStatus" name="changeStatus">
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>
              </td>
              <td className="accept">
                {/* Show this button only if status is Not Accepted */}
                {/* on change make request to update it in db, and show changed status in table */}
                {item.status === "Not Accepted" ? <button>Accept</button> : ""}
              </td>
            </tr>
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
