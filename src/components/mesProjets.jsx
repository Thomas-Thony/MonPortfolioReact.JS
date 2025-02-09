import * as React from "react";
import CarouselWeb from "./Projects/Components/CarouselWeb";
import CarouselDivers from "./Projects/Components/CarouselDivers";
import CarouselJS from "./Projects/Components/CarouselJS";
import "../styles/mesProjets.css"

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
                        <a className="voirProjets" href="#">Voir les projets Web</a>
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi accusamus quo officia? Hic debitis dolorum provident alias, quisquam, illo nam facere temporibus corporis consequuntur est in at, nihil quam voluptatem!
                    </p>
                    <br />
                    <center>
                        <a className="voirProjets" href="#">Voir les projets javascript</a>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quam a, possimus magni minima, quis odit ab aliquid labore incidunt ut eius ipsam id? Magnam nihil delectus facere soluta quidem.
                    </p>
                    <br />
                    <center>
                        <a className="voirProjets" href="#">Voir les projets divers</a>
                    </center>
                    <br />
                    <CarouselDivers/>
                </div>
            </div>
        </>
    );
}

export default MesProjets;