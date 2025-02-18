import "../styles/certifs.css";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

function AutresCertifs() {
    return (
      <>
        <div className="containerIMG">
            <div className="gallerieDisplay">
              <a target="_blank" href="/certfs/ANSII/Certification_Ansii_Thomas-THONY.png">
                <img src="/certfs/ANSII/Certification_Ansii_Thomas-THONY.png" alt="Certification de l&apos;ANSII" width="500" height="auto"/>
              </a>
              <div className="desc">
                <p>Présentation des certifications de l&apos;ANSII.</p>
                <Link to="/ansii" className="voirCertifs">Voir les certifications</Link>
              </div>
            </div>

            <div className="gallerieDisplay">
              <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png">
                <img src="/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png" alt="Certifications de la CNIL" width="600" height="400"/>
              </a>
              <div className="desc">
                <p>Présentation des certifications de la CNIL.</p>
                <Link to="/cnil" className="voirCertifs">Voir les certifications</Link>
              </div>
            </div>

            <div className="gallerieDisplay">
              <a target="_blank" href="/public/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png">
                <img src="/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png" alt="Certifications de Cisco" width="600" height="400"/>
              </a>
              <div className="desc">
                <p>Présentation des certifications de Cisco.</p>
                <Link to="/cisco" className="voirCertifs">Voir les certifications</Link>
              </div>
            </div>
          </div>
        </>
    );
}

export default AutresCertifs;