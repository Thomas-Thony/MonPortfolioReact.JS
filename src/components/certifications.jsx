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
            <center>
                <div className="fonctionImage">
                    <img className='certif_ansii' src="../../public/certfs/Ansii/Certification_Ansii_Thomas-THONY.png" alt="CV de Thomas THONY" />
                    <div className="millieu">
                        <div className="text"><a href="../../public/certfs/Ansii/Certification_Ansii_Thomas-THONY.png" download="Certification_ansii_thomas_thony.png">Télécharger</a>
                        </div>
                    </div>
                </div>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png">
      <img src="/public/certfs/CNIL/PNG/Certificat_module1_thomas-thony.png" alt=" Certificat module 1"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_forest.jpg">
      <img src="img_forest.jpg" alt="Forest"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_lights.jpg">
      <img src="img_lights.jpg" alt="Northern Lights"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="img_mountains.jpg" alt="Mountains"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>

<div className="clearfix"></div>
            </center>
        </>
    );
}

export default Certifs;