import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import FileProduct from './Pages/FileProduct';
import Admin from './Pages/Admin';
import Purchases from './Pages/Purchases';
import Login from './Pages/Login';
import Logup from "./Pages/Logup";
import Cart from "./Pages/Cart";
import AllProducts from './Pages/AllProducts';
import ProductsByCategory from './Pages/ProductsByCategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/fileProduct' element={<FileProduct image={[]} />} />
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/purchases" element={<Purchases />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logup" element={<Logup/>}></Route>
          <Route path="/micarrito" element={<Cart/>}></Route>
          <Route path="/products" element={<AllProducts/>}></Route>
          <Route path="/productsByCategory/:category" element={<ProductsByCategory/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
