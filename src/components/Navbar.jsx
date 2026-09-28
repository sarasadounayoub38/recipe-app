import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <Link to="/" className="logo">
          🍳 Recipe<span>Hub</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/favorites">❤️ Favorites</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;