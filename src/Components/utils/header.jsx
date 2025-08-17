import "react";
import { Link } from "react-router-dom";
import "../styles/header.css"

function Header() {
    return (
        <>
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="navbar-item">
          <Link to="/apropos">À propos</Link>
        </li>    
        <li className="navbar-item">
          <Link to="/projets">Mes projets</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Me contacter</Link>
        </li>
      </ul>
    </div>
        </>
    );
}

export default Header;