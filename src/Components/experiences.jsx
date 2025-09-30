import "react";
import "./styles/experiences.css";

function Experiences() {
    return (
        <>
            <h1 className="titre-page">Expériences</h1>  
            <div className="container-experiences">
                <div className="titre-experience">
                    <h2>Stage de développeur logiciel - Armée de l'air et de l'espace </h2>
                </div>
                <div className="date-experience">
                    <h3>Mai 2025 - Juin 2025</h3>
                    <h4>2 Mois</h4>
                </div>
                <p className="avertissement">
                    Attention ! Toutes les informations présentes dans cet article sont trouvables sur internet <br/>(Sauf pour le logiciel sur lequel je travaille mais aucune habilitation n’est requise (NP =&gt; Non Protégé)).
                </p>
                <div className="description-experience">
                    <p>
                        Développement d'un logiciel interne de simulation d'opérations aériennes basé sur Unreal Engine 5 (Blueprint et C++).
                        Mon rôle consistait à convevoir et améliorer les interfaces utilisateurs afin d'avoir une meilleure ésthétique et ergonomie du logiciel.
                    </p>  
                </div>

                <h2 className="titre-image-technologie">Outils utilisés :</h2>
                
                <div className="images-experience">
                    <img className="image-technologie" src="/assets/UE5.png"/>
                    <img className="image-technologie" src="/assets/cpp.png" />
                    <img className="image-technologie" src="/assets/git.png" />
                    <img className="image-technologie" src="/assets/github-computer-icons.png" />
                    <img className="image-technologie" src="/assets/visual-studio.png" />
                    <img className="image-technologie" src="/assets/figma.svg" />
                </div>
                <div className="travaux-experience">
                    <figure className="figure-experience">
                        <img src="/assets/image-3.png"/>
                        <figcaption>Interface de controle du drone.</figcaption>
                    </figure>
                    <figure className="figure-experience">
                        <img src="/assets/image-4.png"/>
                        <figcaption>Interface de gestion de scénario d'entrainement.</figcaption>
                    </figure>
                </div>
            </div>
        </>
    );
}

export default Experiences;