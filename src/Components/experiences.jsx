import "react";
import "./styles/experiences.css";

function Experiences() {
    return (
        <>
            <div className="container-experiences">
                <h1>Expériences</h1>
                <div className="titre-experience">
                    <h2>Stage de développeur logiciel - Armée de l'air et de l'espace </h2>
                </div>
                <div className="date-experience">
                    <h3>Mai 2025 - Juin 2025</h3>
                    <h4>2 Mois</h4>
                </div>
                <p>
                    Attention ! Toutes les informations présentes dans cet article sont trouvables sur internet (Sauf pour le logiciel sur lequel je travaille mais aucune habilitation n’est requise (NP =&gt; Non Protégé)).
                </p>
                <div className="description-experience">
                    <p>
                        Développement d'un logiciel interne de simulation d'opérations aériennes basé sur Unreal Engine 5 (Blueprint et C++).
                        Mon rôle consistait à convevoir et améliorer les interfaces utilisateurs ?
                    </p>  
                </div>
                <div className="images-experience">
                    <p>Unreal Engine 5</p>
                    <p>C++</p>
                    <p>Git</p>
                    <p>Github</p>
                    <p>Visual Studio</p>
                    <p>Figma</p>
                </div>
                <div className="travaux-experience">
                    <img src="/public/assets/image-3.png"/>
                    <img src="/public/assets/image-4.png"/>
                </div>
            </div>
        </>
    );
}

export default Experiences;