// import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import Body from './components/Body';
// import Counter from './components/Counter';
import Navbar from './components/Navbar';
import ThemeContext from './context/ThemeContext';
// import {CartProvider} from './context/CartContext'

function App() {

  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "Light" : "Dark"}`}>
      {/* <Counter/> */}
      {/* <CartProvider> */}
      <Navbar/>
      <Body/>
      {/* </CartProvider> */}
    </div>
  );
}

export default App;
