import "react";
import "./styles/experiences.css";

function Experiences() {
    return (
        <>
            <h1 className="titre-page">Expériences</h1>  
            <div className="container-experiences">
                <div className="titre-experience">
                    <h2>Stage de développeur logiciel - Armée de l'air et de l'espace </h2>
                    <div className="logo-experience">
                        <img src="/assets/Logo_de_l'Armée_de_l'Air_et_de_l'Espace.png" alt="Logo Armée de l'air et de l'espace" className="logo-experience" />
                        <img src="/assets/Logo_CASPOA.png" alt="Logo Ministère des armées" className="logo-experience" />
                    </div>
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
                    <div className="image-technologie">
                        <img src="/assets/UE5.png" />
                        <p className="titre-technologie">Unreal Engine 5</p>
                    </div>
                    <div className="image-technologie">
                        <img src="/assets/cpp.png" />
                        <p className="titre-technologie">C++</p>
                    </div>
                    <div className="image-technologie">
                        <img src="/assets/git.png"/>
                        <p className="titre-technologie">Git</p>
                    </div>

                    <div className="image-technologie">
                        <img src="/assets/github-computer-icons.png"/>
                        <p className="titre-technologie">Github</p>
                    </div>

                    <div className="image-technologie">
                        <img src="/assets/visual-studio.png" />
                        <p className="titre-technologie">Visual Studio</p>
                    </div>
                    <div className="image-technologie">
                        <img className="image-technologie" src="/assets/figma.svg" />
                        <p className="titre-technologie">Figma</p>
                    </div>
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