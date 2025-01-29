import "../styles/accueil.css"
import Carte from './Cartes/carte';
import Carte2 from './Cartes/carte2';

function Accueil() {
    return (
        <>
            <div className="titre">
                <h1>Thomas THONY</h1>
                <Carte />
                <Carte2/>
            </div>
        </>
    );
}

export default Accueil;