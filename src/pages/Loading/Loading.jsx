import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de ter o react-router-dom instalado
import "./Loading.css";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    // Inicia o timer de 3 segundos
    const timer = setTimeout(() => {
      navigate("/home"); // Altere para a rota da sua página inicial
    }, 3000);

    // Limpa o timer se o componente for destruído antes dos 3s
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <p className="loading-cash">
        <span className="loading-snap">Snap</span>
        Ca
        <span className="loading-dollar">$</span>
        h
      </p>
      
      {/* Sugestão: Uma barra de progresso sutil embaixo do nome */}
      <div className="loader-bar"></div>
    </div>
  );
}