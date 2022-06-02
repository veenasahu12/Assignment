// import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import Body from './components/Body';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import ThemeContext from './context/ThemeContext';

function App() {

  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme === "light" ? "Light" : "Dark"}`}>
      <Counter/>
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
