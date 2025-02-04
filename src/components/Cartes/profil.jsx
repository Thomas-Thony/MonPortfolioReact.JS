import "../../styles/profil.css"
import {Link} from 'react-router-dom';


function Profil(){
    return(
        <>
        <div className="card">
            <img className="card-image" src="../../../certif.jpg" alt=""></img> 
            <h2 className="card-titre">Mes certifications</h2>
            <p className="card-texte">Passioné par le développement Web, j&apos;aprécie particulièrement le travail d&apos;équipe pour apprendre et être appris par les autres.</p>
            <center>
                <div className="btn">
                    <Link to="/certifs"><p>Voir mes certifications</p></Link>
                </div>
            </center>
        </div>
        </>
    );
}

export default Profil;