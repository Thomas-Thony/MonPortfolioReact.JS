import "../../styles/carte.css"
import { Link } from "react-router-dom";

function Carte(){
    return(
        <>
        <div className="card">
            <img className="card-image" src="../../../react.svg" alt="photo_de_profil"></img> 
            <h2 className="card-titre">Mes compétences</h2>
            <p className="card-texte">Je suis un développeur Web, mais j&rsquo;ai sû être curieux et explorer d&rsquo;autres domaines comme les Chatbot, ou encore des jeux à conditions (if...else).</p>
            <center>
                <div className="btn">
                    <Link to="/mesProjets"><p>Voir mes projets</p></Link>
                </div>
            </center>
        </div>
        </>
    );
}

export default Carte;