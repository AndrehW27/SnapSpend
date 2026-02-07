import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Loading from './pages/Loading/Loading';
import Home from './pages/Home/Home';
import TheUsuals from './pages/TheUsuals/TheUsuals';
import Dashboard from './pages/Dashboard/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <div>
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="/home" element={<Home />} />
            <Route path="/usuals" element={<TheUsuals />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}