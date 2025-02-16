import "../styles/certifs.css";

function AutresCertifs() {
    return (
      <>
        <div className="containerIMG">
            <div className="galleryDisplay">
              <a target="_blank" href="/public/certfs/ANSII/Certification_Ansii_Thomas-THONY.png">
                <img src="/public/certfs/ANSII/Certification_Ansii_Thomas-THONY.png" alt="Certification de l&apos;ANSII" width="500" height="auto"/>
              </a>
              <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, natus optio ipsa saepe pariatur sequi porro nemo consequuntur totam ad suscipit cum corporis amet aperiam beatae assumenda, expedita perspiciatis inventore!</div>
            </div>

            <div className="galleryDisplay">
              <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png">
                <img src="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png" alt="Certifications de la CNIL" width="600" height="400"/>
              </a>
              <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, natus optio ipsa saepe pariatur sequi porro nemo consequuntur totam ad suscipit cum corporis amet aperiam beatae assumenda, expedita perspiciatis inventore!</div>
            </div>

            <div className="galleryDisplay">
              <a target="_blank" href="/public/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png">
                <img src="/public/certfs/DigitalAwarenessUpdate20250214-26-b9qz6z.png" alt="Certifications de Cisco" width="600" height="400"/>
              </a>
              <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, natus optio ipsa saepe pariatur sequi porro nemo consequuntur totam ad suscipit cum corporis amet aperiam beatae assumenda, expedita perspiciatis inventore!</div>
            </div>
          </div>
        </>
    );
}

export default AutresCertifs;