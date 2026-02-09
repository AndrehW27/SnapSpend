import { useState, useEffect } from "react"; // Added useEffect
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import "./Menu.css";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // This tracks the current URL

  // Automatically close the menu when the URL changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]); // This runs every time the path changes

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <div className="menu-icon" onClick={toggleMenu}>
        <RxHamburgerMenu />
      </div>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <IoClose onClick={toggleMenu} className="close-icon" />
        </div>
        <nav className="nav-options">
          <p onClick={() => navigate("/home")}>Home</p>
          <p onClick={() => navigate("/snaps")}>Snaps</p>
          <p onClick={() => navigate("/usuals")}>Usuals</p>
          <p onClick={() => navigate("/dashboard")}>Dashboard</p>
          <hr />
          <p className="logout" onClick={() => navigate("/")}>Logout</p>
        </nav>
      </div>

      {/* Close menu if user clicks the dark overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </div>
  );
}