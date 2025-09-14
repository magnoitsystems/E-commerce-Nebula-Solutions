import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FileProduct from './pages/FileProduct.tsx';
import Admin from './pages/Admin';
import Purchases from './pages/Purchases.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path='/fileProduct' element={<FileProduct />} />
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/purchases" element={<Purchases />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
