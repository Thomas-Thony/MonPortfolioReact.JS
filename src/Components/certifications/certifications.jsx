import "react";
import "../styles/certifications.css";
import Certification from "./certification.jsx"; 
import CertificationsListe from "./certifications.json"; 

function Certifications() {
    return (
        <>
            <div className="certifications-grid">
                {CertificationsListe.certifications.map((certification, index) => (
                    <Certification
                        key={index}
                        titreCertification={certification.titre}
                        nomOrganisme={certification.organisme}
                        image={certification.image}
                        description={certification.description}
                    />
                ))}
            </div>
        </>
    );
}

export default Certifications;