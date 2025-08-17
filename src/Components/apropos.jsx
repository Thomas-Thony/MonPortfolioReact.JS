import React from "react";
import "./styles/apropos.css";
import Competences from "./utils/competences.json";
import Competence from "./competence";

const Apropos = () => {
    return (
        <div className="competences-container">
            {Object.entries(Competences.langages).map(([categorie, langages]) => (
                <div key={categorie} className="categorie-section">
                    <h2 className="categorie-titre">{categorie}</h2>
                    <div className="langages-liste">
                        {langages.map((langage, index) => (
                            <Competence
                                key={index}
                                langage={langage.nom}
                                image={langage.image}
                                description={langage.description}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Apropos;
