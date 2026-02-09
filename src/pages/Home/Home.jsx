import { FaMoneyBill1 } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaPix } from "react-icons/fa6";
import { PiContactlessPayment } from "react-icons/pi";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";

import { IoFastFood } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";

import { useState } from "react";
import "./Home.css";
import confetti from "canvas-confetti"; // Importe os confetes

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("credit");
  const [selectedCategory, setSelectedCategory] = useState("food");

const handleSnap = () => {
  // --- Lógica de Captura de Dados ---
  
  // Captura o valor do input (certifique-se de ter um estado para o amount ou use document.querySelector)
  const amountValue = document.querySelector(".amount-input").value;
  
  // Validação básica: não salva se o valor for zero ou vazio
  if (!amountValue || parseFloat(amountValue) <= 0) {
    alert("Please enter an amount!");
    return;
  }

  const newSnap = {
    id: Date.now(), // ID único baseado no timestamp
    amount: parseFloat(amountValue).toFixed(2),
    currency: "BRL",
    method: selectedMethod,   // O estado do método selecionado
    category: selectedCategory, // O estado da categoria selecionada
    notes: document.querySelector(".notes").value || "",
    date: new Date().toLocaleDateString("pt-BR"),
    time: new Date().toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })
  };

  // --- Lógica de LocalStorage ---

  // 1. Pega os dados existentes ou cria um array vazio
  const savedSnaps = JSON.parse(localStorage.getItem("snaps")) || [];
  
  // 2. Adiciona o novo gasto ao início do array (mais recente primeiro)
  const updatedSnaps = [newSnap, ...savedSnaps];
  
  // 3. Salva de volta no LocalStorage
  localStorage.setItem("snaps", JSON.stringify(updatedSnaps));

  // --- Feedback ---
  console.log("🚀 Snap Saved!", newSnap);
  console.log("Total Snaps in Storage:", updatedSnaps.length);

  // --- Sua Animação de Confete existente ---
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ["#10b981", "#059669", "#34d399"],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ["#10b981", "#059669", "#34d399"],
    });
  }, 250);

  // --- UI Feedback ---
  setShowModal(true);
  
  // Resetar campos após o Snap
  setTimeout(() => {
    setShowModal(false);
    // Opcional: Limpar campos após o sucesso
    document.querySelector(".amount-input").value = "";
    document.querySelector(".notes").value = "";
  }, 2500);
};

  const paymentMethods = [
    {
      id: "credit",
      label: "credit",
      icon: <FaCreditCard />,
      color: "rgb(122, 122, 122)",
    },
    {
      id: "cash",
      label: "cash",
      icon: <FaMoneyBill1 />,
      color: "rgb(102, 216, 102)",
    },
    {
      id: "debit",
      label: "debit",
      icon: <FaCreditCard />,
      color: "rgb(255, 201, 86)",
    },
    { id: "pix", label: "pix", icon: <FaPix />, color: "rgb(92, 209, 209)" },
    {
      id: "contactless",
      label: "contactless",
      icon: <PiContactlessPayment />,
      color: "rgb(255, 112, 112)",
    },
    { id: "google", label: "google", icon: <FaGooglePay />, color: "#78acff" },
    {
      id: "apple",
      label: "apple",
      icon: <FaApplePay />,
      color: "rgb(121, 121, 121)",
    },
    {
      id: "paypal",
      label: "paypal",
      icon: <FaPaypal />,
      color: "rgb(117, 200, 255)",
    },
  ];

  const categories = [
    {
      id: "food",
      label: "food",
      icon: <IoFastFood />,
      color: "rgb(255, 189, 114)",
    },
    {
      id: "transport",
      label: "transport",
      icon: <FaCar />,
      color: "rgb(126, 126, 126)",
    },
    {
      id: "home",
      label: "home",
      icon: <FaHouse />,
      color: "rgb(255, 201, 86)",
    },
    {
      id: "health",
      label: "health",
      icon: <MdHealthAndSafety />,
      color: "rgb(252, 117, 117)",
    },
    {
      id: "shopping",
      label: "shopping",
      icon: <FaShoppingCart />,
      color: "rgb(117, 200, 255)",
    },
    {
      id: "pets",
      label: "pets",
      icon: <MdOutlinePets />,
      color: "rgb(121, 86, 56)",
    },
    {
      id: "education",
      label: "education",
      icon: <FaBook />,
      color: "rgb(96, 184, 118)",
    },
    {
      id: "leisure",
      label: "leisure",
      icon: <IoTicket />,
      color: "rgb(89, 100, 165)",
    },
  ];

  // Helper para renderizar os grupos de botões
  const renderButtons = (items, currentSelected, setter) => (
    <div className="button-grid">
      {items.map((item) => (
        <div
          key={item.id}
          className={`icon-box ${currentSelected === item.id ? "active" : ""}`}
          onClick={() => setter(item.id)}
          style={{ "--active-color": item.color }} // Passa a cor para o CSS
        >
          <div className="icon" style={{ color: item.color }}>
            {item.icon}
          </div>
          <p className="icon-text">{item.label}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="app-home">
      <div className="amount-box">
        <input
          className="amount-input"
          type="number"
          inputMode="decimal"
          placeholder="0.00"
        />
        <p className="currency">BRL</p>
      </div>

      <p className="section-title">Payment method</p>
      {renderButtons(paymentMethods, selectedMethod, setSelectedMethod)}

      <p className="section-title">Category</p>
      {renderButtons(categories, selectedCategory, setSelectedCategory)}

      <div className="edit-icon">
        <input className="notes" type="text" placeholder="notes (optional)" />
      </div>

      <button className="log-btn">Snap</button>

      <button className="log-btn" onClick={handleSnap}>
        Snap
      </button>
      {showModal && (
        <div className="success-modal">
          <div className="modal-content">
            <div className="check-icon">✓</div>
            <h2>Snapped!</h2>
            <p>Expense logged successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}
