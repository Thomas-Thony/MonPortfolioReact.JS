import "../styles/accueil.css"
import { Link } from "react-router-dom";
import Carte from './Cartes/carte';
import Carte2 from './Cartes/carte2';

function Accueil() {
    return (
      <>
    <section>
      <div className="a_propos">
        <h1>Bienvenue sur mon site !</h1>
        <div className="wrapper1">
          <div className="content_a_propos">
            <h3>
             Qui suis-je ?
            </h3>
            <p>
              En tant qu'étudiant en BTS SIO avec une spécialisation en SLAM, je me sens particulièrement passionné par le développement web, tant en Front-End qu'en Back-End. J'ai acquis des compétences solides dans la création d'interfaces utilisateur attrayantes et fonctionnelles, tout en m'assurant que la logique derrière ces interfaces est tout aussi robuste. Mon expérience avec le framework React m'a permis de développer des applications dynamiques et réactives, offrant une expérience utilisateur fluide et engageante. Je suis convaincu que ma capacité à allier esthétique et fonctionnalité me distingue dans le domaine du développement.
                </p>
            <div className="bouton_a_propos">
              <Link to="/mesProjets">Voir mes projets</Link>
            </div>
          </div>
          <div className="image_section">
            <Carte2/>
          </div>
        </div>
      </div>
    </section>
    </>
    );
}

export default Accueil;