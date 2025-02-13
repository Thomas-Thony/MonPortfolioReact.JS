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
              <Link className="li" to="/">Accueil</Link>
            </li>
            <li>
              <Link className="li" to="/monCV">A propos</Link>
            </li>
            <li>
              <Link className="li" to="/monProfil">Contact</Link>
            </li>
            <div className="dropdown">
              <li>
               <Link className="li" to="/mesProjets">Mes projets &#9207;</Link>
              </li>
              <div className="dropdown-items">
                <Link className="li" to="/projetsWeb">Projets Web</Link>
                <Link className="li" to="/projetsJS">Projets Javascript</Link>
                <Link className="li" to="/projetsDivers">Autres projets</Link>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </center>
  );
}

export default Navbar;
