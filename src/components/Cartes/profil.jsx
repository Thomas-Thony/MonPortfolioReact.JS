import "../../styles/profil.css";
import { Link } from 'react-router-dom';

function Profil() {

    return (
        <center>
            <div className="carte">
                <img className="carte-image" src="../../../certif.jpg" alt="" />
                <h2 className="carte-titre">Thomas THONY</h2>
                <p className="carte-texte">
                    Passioné par le développement Web, j&apos;aprécie particulièrement le travail d&apos;équipe pour apprendre et être appris par les autres.
                </p>
                <div className="btn">
                    <Link to="/certifs">
                        <p>Voir mes certifications</p>
                    </Link>
                </div>
            </div>
        </center>
    );
}

export default Profil;
