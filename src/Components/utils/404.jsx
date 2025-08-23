import "react";
import { Link } from "react-router-dom";
import "../styles/404.css"

function NonTrouve() {
    return (
        <>
            <div className="non-trouve">
              <h1>Erreur 404</h1>
              <p>Oups ! La page que vous recherchez n'existe pas ou est en cours de construction.</p>
            </div>
            <Link to="/" className="retour">Retour à l'accueil</Link>
        </>
    );
}

export default NonTrouve;