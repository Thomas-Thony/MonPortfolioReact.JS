import "../styles/certifs.css";

function AutresCertifs() {
    return (
      <>
        <div className="containerIMG">
            <div className="gallerieDisplay">
              <a target="_blank" href="/public/certfs/ANSII/Certification_Ansii_Thomas-THONY.png">
                <img src="/public/certfs/ANSII/Certification_Ansii_Thomas-THONY.png" alt="Certification de l&apos;ANSII" width="500" height="auto"/>
              </a>
              <div className="desc">
                <p>Présentation des certifications de l&apos;ANSII.</p>
                <a className="voirCertifs" href="#">Voir les certifications</a>
              </div>
            </div>

            <div className="gallerieDisplay">
              <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png">
                <img src="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png" alt="Certifications de la CNIL" width="600" height="400"/>
              </a>
              <div className="desc">
                <p>Présentation des certifications de la CNIL.</p>
                <a className="voirCertifs" href="#">Voir les certifications</a>
              </div>
            </div>

            <div className="gallerieDisplay">
              <a target="_blank" href="/public/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png">
                <img src="/public/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png" alt="Certifications de Cisco" width="600" height="400"/>
              </a>
              <div className="desc">
                <p>Présentation des certifications de Cisco.</p>
                <a className="voirCertifs" href="#">Voir les certifications</a>
              </div>
            </div>
          </div>
        </>
    );
}

export default AutresCertifs;