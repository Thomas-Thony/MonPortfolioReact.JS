import * as React from "react";
import { Link } from "react-router-dom";
import CarouselWeb from "./Projects/Components/CarouselWeb";
import CarouselDivers from "./Projects/Components/CarouselDivers";
import CarouselJS from "./Projects/Components/CarouselJS";
import "../styles/mesProjets.css";

function MesProjets() {
    return (
        <>
            <div className="sectionWeb">
                <div className="sectionWebContent">
                    <h1>Projets Web</h1>
                    <h3 style={{ paddingLeft: 10, fontWeight: "900",}}>Mes premiers projets</h3>
                    <p>
                        Ayant débuté en fin de seconde (et qui m&apos;a rendu passioné par le principe de créer des concepts par du code), j&apos;ai découvert le HTML5, le CSS3, et le javascript.
                    </p>
                    <p>
                        Toujours sur la partie de l&apos;interface utilisateur, j&apos;ai également découvert les frameworks CSS et javascripts comme Bootstrap et React.
                    </p>
                    <p>
                        A partir du BTS SIO, je déouvre une autre partie du développement web, le Back-End. Cette partie constitue la gestion serveur et base de données.
                    </p>
                    <p>
                        Le PHP, les requêtes SQL, et la modélisation de base de données se rajoutent dans ma manière de conceptualiser les sites Web.
                    </p>
                    <br />
                    <center>
                        <Link className="voirProjets" to="/projetsWeb">Voir les projets Web</Link>
                    </center>
                    <br />
                </div>
                <CarouselWeb/>
            </div>
            <div className="sectionJS">
                <div className="sectionJSContent">
                    <h1>Projets Javascript</h1>
                    <h3 style={{ paddingLeft: 10, fontWeight: "900",}}>Mes premiers projets</h3>
                    <p>
                        En dérivation du développement Web, le javascript sert à programmer des scripts qui interagissent avec l&apos;utilisateur sur d&apos;autres domaines. Par exemple sur les réseaux sociaux.
                        Grâce à la librairie Discord.js, j&apos;ai pu créer des robots pour le réseau social Discord. Ces robots étaient dans des serveurs et utilisaient des commandes, des rôles et des permissions.
                        Chaque commande avait une permission de rôle et de salon spécifique d&apos;utilisation.
                    </p>
                    <br />
                    <center>
                        <Link className="voirProjets" to="/projetsJS">Voir les projets javascript</Link>
                    </center>
                    <br />
                </div>
                <CarouselJS/>
            </div>
            <div className="sectionDivers">
                <div className="sectionDiversContent">
                    <h1>Projets Divers</h1>
                    <h3 style={{ paddingLeft: 10, fontWeight: "900",}}>Mes premiers projets</h3>
                    <p>
                        Du Python, du Arduino, même Unity, j&apos;ai essayé d&apos;autres langages et plateformes de développement. Pour faire des logiciels de tout type : Jeux, applications, et programmes d&apos;automates.
                    </p>
                    <br />
                    <center>
                        <Link className="voirProjets" to="/projetsDivers">Voir les projets divers</Link>
                    </center>
                    <br />
                    <CarouselDivers/>
                </div>
            </div>
        </>
    );
}

export default MesProjets;