import "../styles/certifs.css";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

function AutresCertifs() {
    return (
      <>
        <div className="containerIMG">
            <div className="gallerieDisplay">
              <a target="_blank" href="/certfs/ANSII/Certification_Ansii_Thomas-THONY.png">
                <img src="/certfs/ANSII/Certification_Ansii_Thomas-THONY.png" alt="Certification de l&apos;ANSII"/>
              </a>
              <div className="desc">
                <p>Présentation des certifications de l&apos;ANSII.</p>
                <Link to="/ansii" className="voirCertifs">Voir les certifications <GoLinkExternal
                  className="iconeLien"
                  onMouseOver={({ target }) => target.style.color = "grey"}
                  onMouseOut={({ target }) => target.style.color = "white"} />
                </Link>
              </div>
            </div>

            <div className="gallerieDisplay">
              <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png">
                <img src="/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png" alt="Certifications de la CNIL" style={{backgroundColor: "white"}}/>
              </a>
              <div className="desc">
                <p>Présentation des certifications de la CNIL.</p>
                <Link to="/cnil" className="voirCertifs">Voir les certifications <GoLinkExternal
                  className="iconeLien"
                  onMouseOver={({ target }) => target.style.color = "grey"}
                  onMouseOut={({ target }) => target.style.color = "white"} />
                </Link>
              </div>
            </div>

            <div className="gallerieDisplay">
              <a target="_blank" href="/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png">
                <img src="/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png" alt="Certifications de Cisco"/>
              </a>
              <div className="desc">
                <p>Présentation des certifications de Cisco.</p>
                <Link to="/cisco" className="voirCertifs">Voir les certifications <GoLinkExternal
                  className="iconeLien"
                  onMouseOver={({ target }) => target.style.color = "grey"}
                  onMouseOut={({ target }) => target.style.color = "white"} />
                </Link>
              </div>
            </div>
          </div>
        </>
    );
}

export default AutresCertifs;