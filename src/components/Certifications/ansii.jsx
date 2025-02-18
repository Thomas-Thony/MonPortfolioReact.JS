import * as React from 'react'; 
import "../../styles/ansii.css";

function Ansii() {
    return (
        <>
        <hr/>
        <p className="Description">
            L’ANSSI est l’organisme public chargé de la cybersécurité en France. Son objectif est de prévenir, détecter et répondre aux cybermenaces qui visent les institutions de l&apos;État, les entreprises stratégiques et les infrastructures vitales. Elle conseille les organisations sur les bonnes pratiques de sécurité, émet des recommandations et intervient en cas de cyberattaques pour limiter les impacts.
        </p>
        <hr/>
        <br/>
            <div className="fonctionImage">
                <img className='certif_ansii' src="/certfs/ANSII/Certification_Ansii_Thomas-THONY.png" alt="CV de Thomas THONY" />
                <div className="millieu">
                    <div className="text"><a href="/certfs/ANSII/Certification_Ansii_Thomas-THONY.png" download="Certification_ansii_thomas_thony.png">Télécharger</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ansii;