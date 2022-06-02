import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Feeds from './components/Feeds';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="feeds" element={<Feeds />} />
      </Routes>
    </div>
  );
}

export default App;
