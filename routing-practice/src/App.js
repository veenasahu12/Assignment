import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import PrivateRoute from "./components/PrivateRoute"
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>testing</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/employees" element={<EmployeeList />}/>
        <Route path="/employees/:id" element={
        <PrivateRoute>
        <EmployeeDetails />
        </PrivateRoute >
        }/>
        <Route path="/admin" element={
        <PrivateRoute>
        <Admin />
        </PrivateRoute>
        }/>
        <Route path="/logout" element={<Logout />}/>
      </Routes>
    </div>
  );
}

export default App;