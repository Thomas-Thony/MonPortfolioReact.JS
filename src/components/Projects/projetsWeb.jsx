import * as React from "react";
import { FaGithub } from "react-icons/fa";
import "../../styles/projetsWeb.css";

function ProjetsWeb() {
    return (
        <>
        <h1 style={{color: "white"}}>Mes projets Web</h1>
            <div className="presentationDeveloppement">
                <p>
                    Le développement Web se divise principalement en trois catégories : le front-end, le back-end et le full-stack. Le front-end concerne tout ce que l&apos;utilisateur voit et avec quoi il interagit sur un site, comme les designs, les boutons et les animations. Les technologies utilisées incluent HTML, CSS et JavaScript, qui permettent de créer une interface attrayante et fonctionnelle.
                </p>
                <p>
                    Le back-end, quant à lui, s&apos;occupe de la partie invisible du site. C&apos;est là que se déroulent les opérations de traitement des données, la gestion des bases de données et la logique métier. Les langages couramment utilisés pour le back-end incluent PHP, Python et Ruby, qui permettent de faire fonctionner le site de manière fluide et sécurisée.
                </p>
                <p>
                    Enfin, le développement full-stack combine les compétences du front-end et du back-end. Un développeur full-stack est capable de travailler sur toutes les couches d&apos;une application, ce qui lui permet de comprendre l&apos;ensemble du processus de création d&apos;un site Web. Cela en fait un atout précieux pour les équipes de développement, car il peut naviguer entre les différentes technologies et résoudre des problèmes de manière efficace.
                </p>
            </div>
            <h2 className="section__title">Mon premier projet web avec des enjeux</h2>
            <div className="projects__containers container grid">
                <article className="projects__card">
                    <a href="https://github.com/Thomas-Thony/Site-Healthy" className="projects__image" target="_blank">
                        <img src="/public/SourcesProjets/SiteHealthy.png" width="600px" height="auto" alt="Site Healthy" className="projects__img" />
                    </a>
                    <div className="projects__data">
                        <h3 className="projects__name">Site Healthy <img src="/public/SourcesProjets/HealthyFood2.png" alt="Logo Healthy" /></h3>
                        <p className="projects__description">
                            Site web de santé et bien-être alimentaire avec des recettes maison, en anglais !
                        </p>
                        <div className="projects__skills">
                            <img src="/public/assets/html.png" alt="Logo HTML 5" className="projects__skill" />
                            <img src="/public/assets/css-3.png" alt="Logo CSS 3" className="projects__skill" />
                            <img src="/public/assets/js.png" alt="Logo JavaScript" className="projects__skill"/>
                        </div>
                        <a href="https://github.com/Thomas-Thony/Site-Healthy" target="_blank" className="projects__button">
                            <FaGithub className="i"/>
                            <span>Voir le projet</span>
                        </a>
                    </div>
                </article>
            </div>
        </>
    );
}

export default ProjetsWeb;