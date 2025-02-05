import "../styles/accueil.css"
import Carte from './Cartes/carte';
import Carte2 from './Cartes/carte2';

function Accueil() {
    return (
      <>
    <section>
      <div className="a_propos">
        <h1>A propos de nous</h1>
        <div className="wrapper1">
          <div className="content_a_propos">
            <h3>
              Bienvenue sur notre site web dédié aux étudiants en quête d&apos;expériences professionnelles ! 🎓
            </h3>
            <p>
              Nous sommes une équipe dynamique d’étudiants passionnés, unis par une ambition commune :
              faciliter l’accès aux stages et alternances pour les étudiants, quels que soient leur parcours
              et leurs aspirations. En tant qu&apos;étudiants nous-mêmes, nous comprenons parfaitement les défis
              auxquels vous faites face pour décrocher ces opportunités cruciales dans un monde de plus en
              plus compétitif.
            </p>
            <h3>Qui sommes-nous ?</h3>
            <p>
              Nous sommes un groupe d&apos;étudiants issus de divers horizons académiques (informatique, banque,
              etc.), réunis autour d’un projet commun : créer une plateforme accessible, intuitive, et efficace
              pour répondre aux besoins des étudiants. Ce site est né d’une idée simple : simplifier les
              recherches de stages et d’alternances en centralisant les offres et en proposant des outils
              pratiques pour optimiser votre candidature.
            </p>
            <h3>Notre but</h3>
            <p>
              Votre réussite, notre priorité. Nous croyons que chaque étudiant mérite d’avoir les moyens de
              trouver l’opportunité qui correspond à son potentiel. Notre objectif est de :
            </p>
            <ul>
              <li>Mettre à disposition des offres de stage et d’alternance pertinentes et actualisées.</li>
              <li>Offrir des conseils pratiques pour améliorer vos candidatures, réussir vos entretiens et vous démarquer.</li>
              <li>Créer une communauté où les étudiants peuvent échanger leurs expériences et s’entraider.</li>
            </ul>
            <div className="bouton_a_propos">
              <a href="#">En savoir plus</a>
            </div>
          </div>
          <div className="image_section">
            <Carte/>
          </div>
        </div>
      </div>
    </section>
    </>
    );
}

export default Accueil;