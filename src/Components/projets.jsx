import "react";
import "./styles/projets.css"; //Style du composant
import Projet from './projet.jsx'; //Import du template du composant d'un projet
import ProjetsListe from "./utils/projets.json"; //Liste de l'ensemble des projets

function Projets() {
  return (
    <div className="projets-grid">
      {ProjetsListe.projets.map((projet, index) => (
        <Projet
          key={index}
          nomProjet={projet.name}
          langage1={projet.langage1}
          langage2={projet.langage2}
          langage3={projet.langage3}
          langage4={projet.langage4}
          langage5={projet.langage5}
          image={projet.image}
          description={projet.description}
          lienProjet={projet.lien_projet}
        />
      ))}
    </div>
  );
}

export default Projets;