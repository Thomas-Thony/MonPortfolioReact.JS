import "../../styles/carte2.css"
import {Link} from 'react-router-dom';


function Carte2(){
    return(
        <>
        <div className="card">
            <img className="card-image" src="../../../certif.jpg" alt=""></img> 
            <h2 className="card-titre">Mes certifications</h2>
            <p className="card-texte">Une certification informatique est un moyen de valider des compétences et des connaissances dans le domaine des technologies de l&apos;information.</p>
            <center>
                <div className="btn">
                    <Link to="/certifs"><p>Voir mes certifications</p></Link>
                </div>
            </center>
        </div>
        </>
    );
}

export default Carte2;