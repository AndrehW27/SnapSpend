import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Loading from './pages/Loading/Loading';
import Home from './pages/Home/Home';
import TheUsuals from './pages/TheUsuals/TheUsuals';
import Snaps from './pages/Snaps/Snaps';
import Dashboard from './pages/Dashboard/Dashboard';
import Menu from './pages/Menu/menu'; // Importe seu componente Menu

// Criamos um componente auxiliar para decidir onde o Menu aparece
function AppContent() {
  const location = useLocation();

  return (
    <div className='app-container'>
      {/* O Menu só aparece se o path NÃO for "/" (Loading) */}
      {location.pathname !== "/" && <Menu />}
      
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/usuals" element={<TheUsuals />} />
        <Route path="/snaps" element={<Snaps />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}