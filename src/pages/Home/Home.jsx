// import { useState, useRef } from "react"; // Added useRef
// import "./Home.css";
// import confetti from "canvas-confetti";

// // Icons
// import { 
//   FaMoneyBill1, FaCreditCard, FaPix, FaGooglePay, 
//   FaApplePay, FaPaypal, FaCar, FaHouse, FaBook, 
//   FaChevronDown, FaUser, FaHeart, FaUsers, FaEllipsis 
// } from "react-icons/fa6";
// import { PiContactlessPayment } from "react-icons/pi";
// import { IoFastFood, IoTicket } from "react-icons/io5";
// import { MdHealthAndSafety, MdOutlinePets } from "react-icons/md";
// import { FaShoppingCart } from "react-icons/fa";

// export default function Home() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedMethod, setSelectedMethod] = useState("credit");
//   const [selectedCategory, setSelectedCategory] = useState("food");
//   const [selectedPayer, setSelectedPayer] = useState("Me");
//   const [selectedCurrency, setSelectedCurrency] = useState("BRL");
  
//   // Refs for inputs to ensure we always get the value
//   const amountRef = useRef(null);
//   const notesRef = useRef(null);

//   const [methodsExpanded, setMethodsExpanded] = useState(false);
//   const [categoriesExpanded, setCategoriesExpanded] = useState(false);

//   const currencies = [
//     { code: "BRL", name: "Real" }, { code: "USD", name: "Dollar" },
//     { code: "EUR", name: "Euro" }, { code: "JPY", name: "Yen" },
//     { code: "GBP", name: "Pound" }, { code: "AUD", name: "A. Dollar" },
//     { code: "CAD", name: "C. Dollar" }, { code: "CHF", name: "Franc" },
//     { code: "CNY", name: "Yuan" }, { code: "HKD", name: "HK Dollar" },
//     { code: "NZD", name: "NZ Dollar" },
//   ];

//   const paymentMethods = [
//     { id: "credit", label: "credit", icon: <FaCreditCard />, color: "rgb(122, 122, 122)" },
//     { id: "cash", label: "cash", icon: <FaMoneyBill1 />, color: "rgb(102, 216, 102)" },
//     { id: "debit", label: "debit", icon: <FaCreditCard />, color: "rgb(255, 201, 86)" },
//     { id: "pix", label: "pix", icon: <FaPix />, color: "rgb(92, 209, 209)" },
//     { id: "contactless", label: "contactless", icon: <PiContactlessPayment />, color: "rgb(255, 112, 112)" },
//     { id: "google", label: "google", icon: <FaGooglePay />, color: "#78acff" },
//     { id: "apple", label: "apple", icon: <FaApplePay />, color: "rgb(121, 121, 121)" },
//     { id: "paypal", label: "paypal", icon: <FaPaypal />, color: "rgb(117, 200, 255)" },
//   ];

//   const categories = [
//     { id: "food", label: "food", icon: <IoFastFood />, color: "rgb(255, 189, 114)" },
//     { id: "transport", label: "transport", icon: <FaCar />, color: "rgb(126, 126, 126)" },
//     { id: "home", label: "home", icon: <FaHouse />, color: "rgb(255, 201, 86)" },
//     { id: "health", label: "health", icon: <MdHealthAndSafety />, color: "rgb(252, 117, 117)" },
//     { id: "shopping", label: "shopping", icon: <FaShoppingCart />, color: "rgb(117, 200, 255)" },
//     { id: "pets", label: "pets", icon: <MdOutlinePets />, color: "rgb(121, 86, 56)" },
//     { id: "education", label: "education", icon: <FaBook />, color: "rgb(96, 184, 118)" },
//     { id: "leisure", label: "leisure", icon: <IoTicket />, color: "rgb(89, 100, 165)" },
//   ];

//   const payers = [
//     { id: "Me", label: "Me", icon: <FaUser />, color: "#10b981" },
//     { id: "Partner", label: "Partner", icon: <FaHeart />, color: "#ec4899" },
//     { id: "Family", label: "Family", icon: <FaUsers />, color: "#3b82f6" },
//     { id: "Others", label: "Others", icon: <FaEllipsis />, color: "#94a3b8" },
//   ];

//   const handleSnap = () => {
//     const val = amountRef.current.value;
//     if (!val || parseFloat(val) <= 0) return alert("Please enter amount");

//     const currencyInfo = currencies.find(c => c.code === selectedCurrency);

//     const newSnap = {
//       id: Date.now(),
//       amount: parseFloat(val).toFixed(2),
//       currency: selectedCurrency,
//       currencyName: currencyInfo?.name || "",
//       method: selectedMethod,
//       category: selectedCategory,
//       payer: selectedPayer,
//       notes: notesRef.current.value || "",
//       date: new Date().toLocaleDateString("pt-BR"),
//       time: new Date().toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })
//     };

//     // SAVE & LOG
//     const saved = JSON.parse(localStorage.getItem("snaps")) || [];
//     const updatedData = [newSnap, ...saved];
//     localStorage.setItem("snaps", JSON.stringify(updatedData));
    
//     console.log("✅ SNAP SAVED TO STORAGE:", newSnap);
//     console.log("📂 TOTAL HISTORY SIZE:", updatedData.length);

//     confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ["#10b981", "#34d399"] });

//     setShowModal(true);
//     setTimeout(() => {
//       setShowModal(false);
//       amountRef.current.value = "";
//       notesRef.current.value = "";
//     }, 2000);
//   };

//   const renderAccordionSection = (title, items, currentSelected, setter, isExpanded, setIsExpanded) => {
//     const visibleItems = isExpanded ? items : items.slice(0, 4);
//     return (
//       <div className="accordion-section">
//         <div className="section-header" onClick={() => setIsExpanded(!isExpanded)}>
//           <p className="section-title">{title}</p>
//           <FaChevronDown className={`chevron-icon ${isExpanded ? "rotated" : ""}`} />
//         </div>
//         <div className="button-grid">
//           {visibleItems.map((item) => (
//             <div key={item.id} className={`icon-box ${currentSelected === item.id ? "active" : ""}`} onClick={() => setter(item.id)} style={{ "--active-color": item.color }}>
//               <div className="icon" style={{ color: item.color }}>{item.icon}</div>
//               <p className="icon-text">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderSimpleGrid = (title, items, currentSelected, setter) => (
//     <div className="simple-section">
//       <p className="section-title">{title}</p>
//       <div className="button-grid">
//         {items.map((item) => (
//           <div key={item.id} className={`icon-box ${currentSelected === item.id ? "active" : ""}`} onClick={() => setter(item.id)} style={{ "--active-color": item.color }}>
//             <div className="icon" style={{ color: item.color }}>{item.icon}</div>
//             <p className="icon-text">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="app-home">
//       <div className="amount-box">
//         <input ref={amountRef} className="amount-input" type="number" inputMode="decimal" placeholder="0.00" />
//         <select className="currency-select" value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
//           {currencies.map((c) => (<option key={c.code} value={c.code}>{c.code}</option>))}
//         </select>
//       </div>

//       {renderAccordionSection("Payment method", paymentMethods, selectedMethod, setSelectedMethod, methodsExpanded, setMethodsExpanded)}
//       {renderAccordionSection("Category", categories, selectedCategory, setSelectedCategory, categoriesExpanded, setCategoriesExpanded)}
//       {renderSimpleGrid("Paid By", payers, selectedPayer, setSelectedPayer)}

//       <input ref={notesRef} className="notes" type="text" placeholder="notes (optional)" />
//       <button className="log-btn" onClick={handleSnap}>Snap</button>

//       {showModal && (
//         <div className="success-modal">
//           <div className="modal-content">
//             <div className="check-icon">✓</div>
//             <h2>Snapped!</h2>
//             <p style={{ color: "#666", marginTop: "10px" }}>Expense logged successfully.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useRef } from "react";
import "./Home.css";
import confetti from "canvas-confetti";

// Icons
import { 
  FaMoneyBill1, FaCreditCard, FaPix, FaGooglePay, 
  FaApplePay, FaPaypal, FaCar, FaHouse, FaBook, 
  FaChevronDown, FaUser, FaHeart, FaUsers, FaEllipsis 
} from "react-icons/fa6";
import { PiContactlessPayment } from "react-icons/pi";
import { IoFastFood, IoTicket } from "react-icons/io5";
import { MdHealthAndSafety, MdOutlinePets } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("credit");
  const [selectedCategory, setSelectedCategory] = useState("food");
  const [selectedPayer, setSelectedPayer] = useState("Me");
  const [selectedCurrency, setSelectedCurrency] = useState("BRL");
  
  const amountRef = useRef(null);
  const notesRef = useRef(null);
  
  const [methodsExpanded, setMethodsExpanded] = useState(false);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);

  const currencies = [
    { code: "BRL", name: "Real" }, { code: "USD", name: "Dollar" },
    { code: "EUR", name: "Euro" }, { code: "JPY", name: "Yen" },
    { code: "GBP", name: "Pound" }, { code: "AUD", name: "A. Dollar" },
    { code: "CAD", name: "C. Dollar" }, { code: "CHF", name: "Franc" },
    { code: "CNY", name: "Yuan" }, { code: "HKD", name: "HK Dollar" },
    { code: "NZD", name: "NZ Dollar" },
  ];

  const paymentMethods = [
    { id: "credit", label: "credit", icon: <FaCreditCard />, color: "rgb(122, 122, 122)" },
    { id: "cash", label: "cash", icon: <FaMoneyBill1 />, color: "rgb(102, 216, 102)" },
    { id: "debit", label: "debit", icon: <FaCreditCard />, color: "rgb(255, 201, 86)" },
    { id: "pix", label: "pix", icon: <FaPix />, color: "rgb(92, 209, 209)" },
    { id: "contactless", label: "contactless", icon: <PiContactlessPayment />, color: "rgb(255, 112, 112)" },
    { id: "google", label: "google", icon: <FaGooglePay />, color: "#78acff" },
    { id: "apple", label: "apple", icon: <FaApplePay />, color: "rgb(121, 121, 121)" },
    { id: "paypal", label: "paypal", icon: <FaPaypal />, color: "rgb(117, 200, 255)" },
  ];

  const categories = [
    { id: "food", label: "food", icon: <IoFastFood />, color: "rgb(255, 189, 114)" },
    { id: "transport", label: "transport", icon: <FaCar />, color: "rgb(126, 126, 126)" },
    { id: "home", label: "home", icon: <FaHouse />, color: "rgb(255, 201, 86)" },
    { id: "health", label: "health", icon: <MdHealthAndSafety />, color: "rgb(252, 117, 117)" },
    { id: "shopping", label: "shopping", icon: <FaShoppingCart />, color: "rgb(117, 200, 255)" },
    { id: "pets", label: "pets", icon: <MdOutlinePets />, color: "rgb(121, 86, 56)" },
    { id: "education", label: "education", icon: <FaBook />, color: "rgb(96, 184, 118)" },
    { id: "leisure", label: "leisure", icon: <IoTicket />, color: "rgb(89, 100, 165)" },
  ];

  const payers = [
    { id: "Me", label: "Me", icon: <FaUser />, color: "#10b981" },
    { id: "Partner", label: "Partner", icon: <FaHeart />, color: "#ec4899" },
    { id: "Family", label: "Family", icon: <FaUsers />, color: "#3b82f6" },
    { id: "Others", label: "Others", icon: <FaEllipsis />, color: "#94a3b8" },
  ];

  const handleSnap = () => {
    const val = amountRef.current.value;
    if (!val || parseFloat(val) <= 0) return alert("Please enter amount");

    const newSnap = {
      id: Date.now(),
      amount: parseFloat(val).toFixed(2),
      currency: selectedCurrency,
      method: selectedMethod,
      category: selectedCategory,
      payer: selectedPayer,
      notes: notesRef.current.value || "",
      date: new Date().toLocaleDateString("pt-BR"),
      time: new Date().toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })
    };

    const saved = JSON.parse(localStorage.getItem("snaps")) || [];
    localStorage.setItem("snaps", JSON.stringify([newSnap, ...saved]));
    console.log("✅ Saved:", newSnap);

    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ["#10b981", "#34d399"] });
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      amountRef.current.value = "";
      notesRef.current.value = "";
    }, 2000);
  };

  const renderAccordionSection = (title, items, currentSelected, setter, isExpanded, setIsExpanded) => {
    const visibleItems = isExpanded ? items : items.slice(0, 4);
    return (
      <div className="accordion-section">
        <div className="section-header" onClick={() => setIsExpanded(!isExpanded)}>
          <p className="section-title">{title}</p>
          <FaChevronDown className={`chevron-icon ${isExpanded ? "rotated" : ""}`} />
        </div>
        <div className="button-grid">
          {visibleItems.map((item) => (
            <div key={item.id} className={`icon-box ${currentSelected === item.id ? "active" : ""}`} onClick={() => setter(item.id)} style={{ "--active-color": item.color }}>
              <div className="icon" style={{ color: item.color }}>{item.icon}</div>
              <p className="icon-text">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSimpleGrid = (title, items, currentSelected, setter) => (
    <div className="simple-section">
      <p className="section-title">{title}</p>
      <div className="button-grid">
        {items.map((item) => (
          <div key={item.id} className={`icon-box ${currentSelected === item.id ? "active" : ""}`} onClick={() => setter(item.id)} style={{ "--active-color": item.color }}>
            <div className="icon" style={{ color: item.color }}>{item.icon}</div>
            <p className="icon-text">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="app-home">
      <div className="amount-box">
        <input ref={amountRef} className="amount-input" type="number" inputMode="decimal" placeholder="0.00" />
        <select className="currency-select" value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
          {currencies.map((c) => (<option key={c.code} value={c.code}>{c.code}</option>))}
        </select>
      </div>

      {renderAccordionSection("Payment method", paymentMethods, selectedMethod, setSelectedMethod, methodsExpanded, setMethodsExpanded)}
      {renderAccordionSection("Category", categories, selectedCategory, setSelectedCategory, categoriesExpanded, setCategoriesExpanded)}
      {renderSimpleGrid("Paid By", payers, selectedPayer, setSelectedPayer)}

      <input ref={notesRef} className="notes" type="text" placeholder="notes (optional)" />
      <button className="log-btn" onClick={handleSnap}>Snap</button>

      {showModal && (
        <div className="success-modal">
          <div className="modal-content">
            <div className="check-icon">✓</div>
            <h2>Snapped!</h2>
            <p style={{ color: "#666", marginTop: "10px" }}>Expense logged successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}