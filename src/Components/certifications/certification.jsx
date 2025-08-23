import "react";
import "../styles/certification.css";

//Importation des certifications

//Liste des certifications associées aux images

//Contenu principal du composant
const Certification = ({titreCertification, nomOrganisme, image, description}) => {
    return (
        <>
            <div className="certification-container">
                <h1>{titreCertification}</h1>
                <h3>{nomOrganisme}</h3>
                <a href={image} target="_blank">
                    <img className="image-certification" src={image} alt={titreCertification} />
                </a>
                <h6>{description}</h6>
            </div>  
        </>
    );
}

export default Certification;