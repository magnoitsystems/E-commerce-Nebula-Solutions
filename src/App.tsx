import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FileProduct from './pages/FileProduct.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path='/fileProduct' element={<FileProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
