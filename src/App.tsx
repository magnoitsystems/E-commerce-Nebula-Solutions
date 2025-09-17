import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FileProduct from './pages/FileProduct.tsx';
import Admin from './pages/Admin';
import Purchases from './pages/Purchases.tsx';
import Login from './pages/Login.tsx';
import Logup from "./pages/Logup.tsx";
import Cart from "./pages/Cart.tsx";
import AllProducts from './pages/AllProducts.tsx';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
