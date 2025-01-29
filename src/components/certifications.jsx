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
            </center>
        </>
    );
}

export default Certifs;