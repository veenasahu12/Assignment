import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Routes , Route} from 'react-router-dom'
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="Products/*" element={<Products />}>
           <Route path=":id" element={<Product />}/>
           <Route path=":id" element={<more details />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
