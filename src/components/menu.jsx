import "../styles/menu.css";
import * as React from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
  return (
    <center>
      <nav className="NavBar">
        <div className="NavBarItems">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/monCV">A propos</Link>
            </li>
            <li>
              <Link to="/monProfil">Contact</Link>
            </li>
            <div className="dropdown">
              <li>
               <Link to="/mesProjets">Mes projets &#9207;</Link>
              </li>
              <div className="dropdown-items">
                <li>Projets Web</li>
                <li>Projets Javascript</li>
                <li>Autres projets</li>
              </div>
            </div>
            <li>Ma veille</li>
          </ul>
        </div>
      </nav>
    </center>
  );
}

export default Navbar;
