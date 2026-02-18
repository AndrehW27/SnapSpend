import { useEffect, useState } from "react";
import { FaCreditCard, FaUser, FaTag, FaQuoteLeft, FaTrash, FaPen } from "react-icons/fa6";
import "./Snaps.css";

export default function Snaps() {
  const [history, setHistory] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("snaps")) || [];
    setHistory(saved);
  }, []);

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (window.confirm("Delete this snap?")) {
      const updated = history.filter(item => item.id !== id);
      setHistory(updated);
      localStorage.setItem("snaps", JSON.stringify(updated));
    }
  };

  return (
    <div className="snaps-container">
      <h1 className="snaps-title">Snaps</h1>
      <div className="snaps-list">
        {history.length === 0 ? (
          <p className="empty-msg">No history found.</p>
        ) : (
          history.map((snap) => (
            <div 
              key={snap.id} 
              className={`snap-card ${activeCard === snap.id ? "active" : ""}`}
              onClick={() => setActiveCard(activeCard === snap.id ? null : snap.id)}
            >
              <div className="card-header">
                <span className="card-date">{snap.date} • {snap.time}</span>
                <span className="card-amount">{snap.currency} {snap.amount}</span>
              </div>

              <div className="card-body">
                <span className="info-badge"><FaCreditCard /> {snap.method}</span>
                <span className="info-badge"><FaTag /> {snap.category}</span>
                <span className="info-badge"><FaUser /> {snap.payer}</span>
              </div>

              {snap.notes && (
                <div className="card-notes">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{snap.notes.length > 40 ? snap.notes.substring(0, 40) + "..." : snap.notes}</p>
                </div>
              )}

              {activeCard === snap.id && (
                <div className="card-actions">
                  <button className="edit-btn" onClick={(e) => e.stopPropagation()}>
                    <FaPen /> Edit
                  </button>
                  <button className="delete-btn" onClick={(e) => handleDelete(snap.id, e)}>
                    <FaTrash /> Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}