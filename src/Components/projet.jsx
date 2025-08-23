import "react"
import "./styles/projet.css"; //Style du composant 

//Images des langages
import jsLogo from "/assets/js.png";
import htmlLogo from "/assets/html.png";
import PHPLogo from "/assets/php.png";
import PythonLogo from "/assets/python.png";
import cssLogo from "/assets/css-3.png";
import CSharp from "/assets/c-sharp.png";
import CPP from "/assets/cpp.png";
import SQL from "/assets/database.png";
import DiscordJS from "/assets/discordjs.png";
import Arduino from "/assets/arduino.png";

//Listes des langages associés aux images
const langageImages = {
  JS: jsLogo,
  PHP: PHPLogo,
  CSharp,
  Python: PythonLogo,
  CPP: CPP,
  HTML: htmlLogo,
  CSS: cssLogo,
  SQL: SQL,
  DiscordJS: DiscordJS,
  Arduino: Arduino
};


const Projet = ({ nomProjet, langage1, langage2, langage3, langage4, langage5 , image ,description, lienProjet }) => {
  const langages = [langage1, langage2, langage3, langage4, langage5].filter(Boolean); 

  return (
    <div className="projet-container">
      <h1>{nomProjet}</h1>
      <a href={image} target="_blank">
        <img className="image-projet" src={image} alt={nomProjet} />
      </a>
      <div className="langages">
        {langages.map((lang, index) => (
          <div key={index} className="langage-item">
            {langageImages[lang] ? (
                <div className="langage-image">
                    <img className="icone-langage" src={langageImages[lang]} alt={lang} />
                    <span className="langage-nom">{lang}</span>      
                </div>   
            ) : (
              <span>{lang}</span> // si pas d'image trouvée, affiche le nom
            )}
          </div>
        ))}
      </div>
      <h6>{description}</h6>
      <a className="lien-projet" target="_blank" href={lienProjet}>Voir le projet</a>    
    </div>
  );
};
export default Projet;