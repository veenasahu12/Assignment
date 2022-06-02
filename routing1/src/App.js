import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Products />
    </div>
  );
}

export default App;
