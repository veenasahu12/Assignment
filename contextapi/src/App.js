// import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import AuthContext from './Context/AuthContext';

function App() {

  const {isAuth} = useContext(AuthContext);
  return (
    <div className="App">
      
      <h1>Auth Context</h1>
      <Navbar />
      {isAuth ? "" : <Login /> }


      <h1>Todo</h1>
      <Todo />
    </div>
  );
}

export default App;
