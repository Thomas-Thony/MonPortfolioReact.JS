import "../styles/certifs.css";

function Certifs() {
    return (
        <>
            <hr />
            <p className="Description">
                Fondée en 2009, l&apos;agence nationale de la sécurité des systèmes d&apos;information (ANSSI) est l&apos;autorité nationale en matière de cybersécurité.
                Son objectif est de comprendre, prévenir et répondre au risque cyber.
            </p>
            <hr/>
            <br/>
            
                <div className="fonctionImage">
                    <img className='certif_ansii' src="../../public/certfs/Ansii/Certification_Ansii_Thomas-THONY.png" alt="CV de Thomas THONY" />
                    <div className="millieu">
                        <div className="text"><a href="../../public/certfs/Ansii/Certification_Ansii_Thomas-THONY.png" download="Certification_ansii_thomas_thony.png">Télécharger</a>
                        </div>
                    </div>
                </div>
          <hr />
            <p className="Description">
                Description sur la CNIL et le RGPD.
            </p>
          <hr />
          <center>
            <div className="Certifs_CNIL">
              <div className="responsive">
                <div className="gallery">
                  <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png">
                    <img src="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png" alt=" Certificat module 1"/>
                  </a>
                  <div className="desc">Module 1</div>
                </div>
              </div>
                  
              <div className="responsive">
                <div className="gallery">
                  <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module2_thomas-thony.png">
                    <img src="/public/certfs/CNIL/PNG/Certificat_module2_thomas-thony.png" alt="Certificat module 2"/>
                  </a>
                  <div className="desc">Module 2</div>
                </div>
              </div>
                  
              <div className="responsive">
                <div className="gallery">
                  <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module3_thomas-thony.png">
                    <img src="/public/certfs/CNIL/PNG/Certificat_module3_thomas-thony_1.png" alt="Certificat module 3"/>
                  </a>
                  <div className="desc">Module 3</div>
                </div>
              </div>
                  
              <div className="responsive">
                <div className="gallery">
                  <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module4_thomas-thony.png">
                    <img src="/public/certfs/CNIL/PNG/Certificat_module4_thomas-thony.png" alt="Certificat module 4"/>
                  </a>
                  <div className="desc">Module 4</div>
                </div>
              </div>
                        
              <div className="responsive">
                <div className="gallery">
                  <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module5_thomas-thony.png">
                    <img src="/public/certfs/CNIL/PNG/Certificat_module5_thomas-thony.png" alt="Certificat module 4"/>
                  </a>
                  <div className="desc">Module 5</div>
                </div>
              </div>
            </div>
            </center>
        </>
    );
}

export default Certifs;